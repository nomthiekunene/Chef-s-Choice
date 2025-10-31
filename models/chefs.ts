import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  image?: string; 
  createdAt: Date;
}

const postSchema: Schema<IPost> = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: String, required: true },
    authorName: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

const Post = mongoose.models.post || mongoose.model<IPost>("post", postSchema);
export default Post;