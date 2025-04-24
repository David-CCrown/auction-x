import { AuctionDto } from "../(dtos)/auction";
import Auction from "../(schemas)/auction.schema";
import User from "../(schemas)/user.schema";

export const createAuction = async (auctionDto: AuctionDto) => {
  const auctionExists = await User.findOne({
    title: auctionDto.title,
    seller: auctionDto.seller,
  });

  if (!auctionExists) {
    return { error: "Auction already exists" };
  }

  const newAuction = await Auction.create({ ...auctionDto });

  return {
    message: "Auction created",
    auction: newAuction,
  };
};
