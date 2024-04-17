import { customhooks } from "@/models/uCHS.model";
import dbconnect from "@/database/dbconnect";
import { NextResponse, NextRequest } from "next/server";

interface RequestBody {
  hookname: string;
}

dbconnect();

export const POST = async (request: NextRequest) : Promise<NextResponse>=> {
  try {
    const { hookname }: RequestBody = await request.json();
    
    const hook = await customhooks.findOne({ "hookname": hookname });
    return NextResponse.json({ hook: hook}); 
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
