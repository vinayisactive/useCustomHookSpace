import { customhooks } from "@/models/uCHS.model";
import dbconnect from "@/database/dbconnect";
import { NextResponse, NextRequest } from "next/server";

 

dbconnect();

export const GET = async (request: NextRequest, { params }: {params: { hookname: string }}) : Promise<NextResponse>=> {
  try {
    const hook = await customhooks.findOne({ "hookname": params.hookname });
    return NextResponse.json({ hook }); 
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
