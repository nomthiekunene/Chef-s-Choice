import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  name: string;
  email: string;
  rating: number;
  comment: string;
  image?: string;
  createdAt: Date;
}

const reviewSchema: Schema<IReview> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

const Review = mongoose.models.Review || mongoose.model<IReview>("Review", reviewSchema);

export default Review;