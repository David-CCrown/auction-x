import { NextRequest, NextResponse } from "next/server";
import { ErrorMessage } from "../../(dtos)/generic";
import supabase from "@/config/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const auctionHouseId = params.id;
    const { data, error, status } = await supabase
      .from("auction_house")
      .select("*")
      .eq("id", auctionHouseId)
      .single();

    if (error) {
      return NextResponse.json({ error }, { status });
    }
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error, message: ErrorMessage }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const updateBody = await req.json();
    const auctionHouseId = params.id;
    const { data, error, status } = await supabase
      .from("auction_house")
      .update({ ...updateBody })
      .eq("id", auctionHouseId)
      .select("*")
      .single();

    if (error) {
      return NextResponse.json({ error }, { status });
    }
    return NextResponse.json({
      data,
      message: "Auction House Updated Successfully!!!",
    });
  } catch (error) {
    return NextResponse.json({ error, message: ErrorMessage }, { status: 500 });
  }
}
