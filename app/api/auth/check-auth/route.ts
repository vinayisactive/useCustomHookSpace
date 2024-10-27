import { NextRequest } from "next/server";
import { verifyJWT } from "@/helpers/verifyJWT";
import ResponseHandler from "@/helpers/ResponseHandler";
import { users } from "@/models/user.model";
import dbconnect from "@/database/dbconnect";

dbconnect();
export const GET = async (request: NextRequest) => {
  try {
    const userId = await verifyJWT(request);
    
    const user = await users.findById(userId);
    if (!user.id) {
      return ResponseHandler.error("User not found", 404);
    }

    return ResponseHandler.success({ name: user.name });
  } catch (error: any) {
    return ResponseHandler.error(error.message, 500);
  }
};
