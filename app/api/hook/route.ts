import { customhooks } from "@/dbUtilites/uCHSchema";
import dbconnect from "@/dbUtilites/dbconnect";
import { NextResponse, NextRequest } from "next/server";

interface RequestBody {
  hookname: string;
}

export const POST = async (request: NextRequest) : Promise<NextResponse>=> {
  try {
    await dbconnect();
    const { hookname }: RequestBody = await request.json();
    
    const hook = await customhooks.findOne({ "hookname": hookname });
    return NextResponse.json({ hook: hook}); 
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
