import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IBlog extends Document {
  content: string;
  name: string;
  poster: string;
  mediumUrl: string;
  poster_img: string;
}

const BlogSchema: Schema = new Schema<IBlog>({
  content: { type: String},
  name: { type: String},
  poster: { type: String },
  mediumUrl: { type: String },
  poster_img: { type: String }
});

 export const BlogModel: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);


