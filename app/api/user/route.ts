import { validateDtoMiddleware } from "@/lib/validator.middleware";
import dbConnect from "../db";
import { UserDto } from "../(dtos)/user.dto";
import { createUser } from "./service";
import { NextResponse } from "next/server";
import supabase from "@/config/supabase";

export async function POST(req: Request) {
  const body = await req.json();

  const { data, error, status } = await supabase
    .from("user")
    .insert([{ ...body }])
    .select();

  if (error) {
    return NextResponse.json({ error }, { status });
  }
  return NextResponse.json({ data });
}

export async function GET(req: Request) {
  const { data, error } = await supabase.from("user").select("*");
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ data });
}
