import { customhooks } from "@/database/models/uCHS.model";
import dbconnect from "@/database/dbconnect";
import { NextResponse, NextRequest } from "next/server";
import ResponseHandler from "@/helpers/ResponseHandler";

dbconnect();
export const GET = async (request: NextRequest, { params }: {params: { hookname: string }}) : Promise<NextResponse>=> {
  try {
    
    console.log(params.hookname);

    const hook = await customhooks.findOne(
        { "hookname": params.hookname }
    );

  return ResponseHandler.success(hook);
  } catch (error: any) {
    return ResponseHandler.error(error.message, 500);
  }
};
