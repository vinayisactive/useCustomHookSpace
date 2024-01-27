import mongoose, { Schema, Document, Model } from "mongoose";

interface Hook {
 hookname: string;
 description: string;
 primarylang: string;
 secondarylang: string;
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
 secondarylang: {
    type: String,
    required: true,
    unique: true,
 },
}, {
 timestamps: true,
});


export const customhooks = mongoose.models.customhooks || mongoose.model("customhooks", hookSchema);