import { customhooks } from "@/models/uCHS.model";
import dbconnect from "@/database/dbconnect";
import { NextResponse, NextRequest } from "next/server";


dbconnect();
export const GET = async (request: NextRequest, { params }: {params: { hookname: string }}) : Promise<NextResponse>=> {
  try {

    const hook = await customhooks.findOne({ "hookname": params.hookname });
    if(!hook)
      return NextResponse.json({error: `${params.hookname} is coming soon`}, {status: 500}); 

    return NextResponse.json({ hook },{status:200}); 
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
