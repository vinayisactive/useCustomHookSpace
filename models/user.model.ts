import mongoose, { Document, Model, Schema } from "mongoose";

interface userSchema{
    name: string,
    email: string, 
    password: string,
    isAdmin: boolean
}

interface userDocument extends userSchema, Document{}
interface userModel extends Model<userDocument>{}

const userSchema = new Schema<userDocument, userModel>({
 name: {
    type: String, 
    required: true
 },
 email: {
    type: String, 
    required: true, 
    unique: true
 },
 password: {
    type: String, 
    required: true
 },
 isAdmin: {
   type: Boolean,
   default: false
 }
},{timestamps: true}); 

export const users = mongoose.models.users || mongoose.model("users", userSchema); 