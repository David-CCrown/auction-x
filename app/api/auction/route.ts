import supabase from "@/config/supabase";
import { NextResponse } from "next/server";
import { ErrorMessage } from "../(dtos)/generic";

export async function GET(req: Request) {
  try {
    const { data, error, status } = await supabase.from("auction").select("*");
    if (error) {
      return NextResponse.json({ error }, { status });
    }
    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json({ error: err, message: ErrorMessage });
  }
}

export async function POST(req: Request) {
  const body = await req.json();

  const { data, error, status } = await supabase
    .from("auction")
    .insert([{ ...body }])
    .select();

  if (error) {
    return NextResponse.json({ error }, { status });
  }
  return { data };
}
