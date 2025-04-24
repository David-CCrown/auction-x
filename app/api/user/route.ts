import { validateDtoMiddleware } from "@/lib/validator.middleware";
import dbConnect from "../db";
import { UserDto } from "../(dtos)/user.dto";
import { createUser } from "./service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  try {
    const user = await createUser(body);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
