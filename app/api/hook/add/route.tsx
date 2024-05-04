import dbconnect from "@/database/dbconnect"
import { customhooks } from "@/models/uCHS.model";
import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "@/utilities/verifyJWT";
import { users } from "@/models/user.model";


dbconnect();
export const POST = async(request: NextRequest, respone: NextResponse) => {
    const userId = await verifyJWT(request);
    const { hookname, description, code, toUse, toUseDescription, toUseCode } = await request.json();

    if (!hookname || !description || !code  || !toUse || !toUseCode || !toUseDescription)
        return NextResponse.json({error: "Provide all the value"}, {status: 401 }); 

    if(!userId)
        return NextResponse.json({error: "Invalid user"},{status: 401}); 

    try {
        const user = await users.findById(userId);
        if(!user)
         return NextResponse.json({error: "User doesn't exists"}, {status: 404});
        
        if(user.isAdmin === false)
            return NextResponse.json({error: "This user doesn't have custom hook post permissions"},{status: 500}); 

            const postCustomhookRefrence = await customhooks.create({
                hookname, 
                description, 
                code, 
                toUse, 
                toUseCode,
                toUseDescription
            }); 

            if(!postCustomhookRefrence)
                    return NextResponse.json({error: "Failed to post customhook"}, {status: 500}); 

            return NextResponse.json(
                {
                    success: true,
                    message: "Custom hook posted successfully",
                },
                {
                    status: 200
                }
            ); 

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500}); 
    }
}