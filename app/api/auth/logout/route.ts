import { NextRequest, NextResponse } from "next/server";
import ResponseHandler from "@/helpers/ResponseHandler";

export const POST = async(request: NextRequest, respone: NextResponse) => {
  try {
    const respone = NextResponse.json({ success:true },{ status: 200}); 

    respone.cookies.set("accessToken", "",{
        httpOnly: true, 
        expires: new Date(0)
    }); 

    return respone; 
  } catch (error: any) {
    return ResponseHandler.error(error.message); 
  }
}