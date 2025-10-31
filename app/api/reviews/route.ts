import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../lib/auth";
import connect from "@/db";
import Review from "@/models/reviews";

export const GET = async () => {
  try {
    await connect();
    const reviews = await Review.find().sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(reviews), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error" + error, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connect();
    const { name, email, rating, comment, image } = await request.json();
    const newReview = new Review({ name, email, rating, comment, image });
    await newReview.save();
    return new NextResponse(JSON.stringify(newReview), { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error" + error, { status: 500 });
  }
};