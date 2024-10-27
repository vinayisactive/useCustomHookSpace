import dbconnect from "@/database/dbconnect";
import { users } from "@/database/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ResponseHandler from "@/utils/helpers/ResponseHandler";

dbconnect();
export const POST = async (request: NextRequest) => {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return ResponseHandler.error("Provide email and password", 401);
    }

    const user = await users.findOne({ email: email });
    if (!user) {
      return ResponseHandler.error("User doesn't exists with this email");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user?.password);
    if (!isPasswordCorrect) {
      return ResponseHandler.error("Password is incorrect");
    }

    const generatedToken = jwt.sign(
      { _id: user?._id },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: "30d" }
    );

    const response = NextResponse.json({ success: true }, { status: 200 });

    response.cookies.set("accessToken", generatedToken, {
      httpOnly: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    return response;
  } catch (error: any) {
    return ResponseHandler.error(error.message || "Failed to login user");
  }
};
