import { NextResponse } from "next/server";
import connect from "@/db";
import user from "@/models/users";     

export const GET = async () => {
  try {
    await connect();
    const users = await user.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error" + error, { status: 500 });
  }     

};