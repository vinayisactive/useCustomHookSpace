import dbconnect from "@/database/dbconnect";
import { users } from "@/database/models/user.model";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import ResponseHandler from "@/helpers/ResponseHandler";

dbconnect();
export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return ResponseHandler.error("Provide name, email and password", 401);
    }

    const isAlreadyExists = await users.findOne({ email: email });
    if (isAlreadyExists){ 
        return ResponseHandler.error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await users.create({
      name,
      email,
      password: hashedPassword,
    });

    if (!user)
      return ResponseHandler.error("Failed to register user");

    return ResponseHandler.success({
      user_email: {
        name: user?.name,
        email: user?.email,
      },
    });
  } catch (error: any) {
    return ResponseHandler.error(error.message);
  }
};
