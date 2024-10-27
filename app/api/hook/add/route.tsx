import dbconnect from "@/database/dbconnect";
import { customhooks } from "@/models/uCHS.model";
import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "@/helpers/verifyJWT";
import { users } from "@/models/user.model";
import ResponseHandler from "@/helpers/ResponseHandler";

dbconnect();
export const POST = async (request: NextRequest, respone: NextResponse) => {
  try {
    const userId = await verifyJWT(request, "id");
    const { hookname, description, code, toUse, toUseDescription, toUseCode } = await request.json();

    if (
      !hookname ||
      !description ||
      !code ||
      !toUse ||
      !toUseCode ||
      !toUseDescription
    ) {
      return ResponseHandler.error("All fields are required", 400);
    }

    const user = await users.findById(userId);
    if (!user) {
      return ResponseHandler.error("User not found", 404);
    }

    if (!user.isAdmin) {
      return ResponseHandler.error("Insufficient permissions to post custom hooks", 403);
    }

    const data = await customhooks.create({
      hookname,
      description,
      code,
      toUse,
      toUseCode,
      toUseDescription,
    });

    if (!data) {
      return ResponseHandler.error("Failed to create custom hook. Please try again later.",500);
    }

    return ResponseHandler.success(data);

  } catch (error: any) {
    if (error.message.includes("token")) {
      return ResponseHandler.error(error.message, 401);
    }

    return ResponseHandler.error("An unexpected error occurred while creating the custom hook.", 500);
  }
};
