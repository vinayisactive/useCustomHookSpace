import {customhooks} from "@/Schema/CustomHookSchema";
import connectMongoDB from "@/DBconnection/connectMongoDB";
import { NextResponse, NextRequest  } from "next/server";

export const POST  = async(request : NextRequest) => {
    try {
        await connectMongoDB(); 
        const {hookname, description, primarylang} = await request.json(); 

        await customhooks.create({hookname, description, primarylang})
        
        return NextResponse.json({
            message : "hook created"
        }, { status  : 201 })
        
    } catch (error) {
        console.log(error);
    }
}

// export const GET = async() => {
//     try {
//       await connectMongoDB();
//       const hooks = await customhooks.find();
  
//       return NextResponse.json({ data: hooks });
//     } catch (error) {
//       console.log(error);
//     }
// }