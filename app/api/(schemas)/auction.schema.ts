import mongoose, { Schema } from "mongoose";

const auctionSchema = new mongoose.Schema({
  auctionId: {
    // Same as on-chain Id
    type: String,
    required: true,
    unique: true,
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  seller: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  sellerWalletAddress: {
    type: String,
    required: true,
  },

  startTime: {
    type: Date,
    required: true,
  },

  endTime: {
    type: Date,
    required: true,
  },

  status: {
    type: String,
    enum: ["Active", "Ended", "Cancelled"],
    default: "Active",
  },

  category: {
    type: String,
    required: true,
  },
});

const Auction = mongoose.model("Auction", auctionSchema);
export default Auction;
