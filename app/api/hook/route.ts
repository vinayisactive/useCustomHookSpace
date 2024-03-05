import { customhooks } from "@/dbUtilites/uCHSchema";
import dbconnect from "@/dbUtilites/dbconnect";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    await dbconnect();
    const { hookname } = await request.json();
    
    const hook = await customhooks.findOne({ "hookname": hookname });
    return NextResponse.json({ hook: hook}); 
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
