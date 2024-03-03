import { customhooks } from "@/Schema/CustomHookSchema";
import connectMongoDB from "@/DBconnection/connectMongoDB";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connectMongoDB();
    const id = request.nextUrl.searchParams.get("slug")!;
    console.log(id ? id : "hello im route");
    
    const hook = await customhooks.findOne({ "hookname": id});
    console.log(hook);
    
    return NextResponse.json({ hook: hook}); 
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
