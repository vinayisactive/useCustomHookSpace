import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'

export const verifyJWT = (request: NextRequest) => {
    try {
        const accessToken = request.cookies.get("accessToken")?.value || ""
        if(!accessToken)
                throw new Error("token isn't present"); 
        
        const decodedToken: any = jwt.verify(
            accessToken, 
            process.env.ACCESS_TOKEN_SECRET!
        ); 

    return decodedToken._id; 
    } catch (error: any) {
        throw new Error(error.message)
    }
}; 