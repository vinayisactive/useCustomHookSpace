import mongoose, { Schema, Document, Model } from "mongoose";

interface Hook {
 hookname: string;
 description: string;
 primarylang: string;
 toUse: string; 
 toUseDescription: string; 
 toUseCode: string
}

interface HookDocument extends Hook, Document {}
interface HookModel extends Model<HookDocument> {}

const hookSchema = new Schema<HookDocument, HookModel>({
 hookname: {
     type: String,
     required: true,
     unique: true,
  },
  description: {
     type: String,
     required: true,
  },
  primarylang: {
     type: String,
     required: true,
     unique: true,
  },
  toUse: {
    type: String,
    unique: true,
 },
 toUseDescription: {
    type: String,
    unique: true,
 },
 toUseCode: {
    type: String,
    unique: true,
 },
 }, {
  timestamps: true,
 });


export const customhooks = mongoose.models.customhooks || mongoose.model("customhooks", hookSchema);