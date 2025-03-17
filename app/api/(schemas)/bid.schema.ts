import mongoose, { Schema } from "mongoose";

const bidSchema = new mongoose.Schema({
  auctionId: {
    type: String,
    required: true,
  },
  bidder: {
    type: String,
    required: true,
  },
  bidAmount: {
    type: Number,
    required: true,
  },
  bidTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Bid = mongoose.model("Bid", bidSchema);
export default Bid;
