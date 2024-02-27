import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IBlog extends Document {
  content: string;
  name: string;
  poster: string;
  mediumUrl: string;
  poster_img: string;
}

const BlogSchema: Schema = new Schema<IBlog>({
  content: { type: String, required: true },
  name: { type: String, required: true },
  poster: { type: String, required: true },
  mediumUrl: { type: String, required: true },
  poster_img: { type: String, required: true }
});

 export const BlogModel: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);


