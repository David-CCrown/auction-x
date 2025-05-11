import { NextResponse } from "next/server";
import supabase from "@/config/supabase";

export async function GET(req: Request) {
  // await dbConnect();
  // const body = await req.json();
  // try {
  //   const user = await createUser(body);
  //   return NextResponse.json(user);
  // } catch (error) {
  //   return NextResponse.json({ error: error }, { status: 400 });
  // }

  const { data, error } = await supabase.from("user").select("*");

  if (error) {
    console.log({ error });
    return NextResponse.json({ error });
  }
  return NextResponse.json({ data });
}
