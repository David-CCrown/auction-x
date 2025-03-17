import mongoose, { Schema } from "mongoose";

const settlementSchema = new mongoose.Schema({
  auctionId: {
    type: String,
    required: true,
  },
  winner: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  winnerWalletAddress: {
    type: String,
    required: true,
  },
  finalPrice: {
    type: Number,
    required: true,
  },
  seller: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  sellerWalletAddress: {
    type: String,
    required: true,
  },

  platformFee: {
    type: Number,
    required: true,
  },

  transactionHash: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["Pending", "Completed", "Refunded", "Cancelled"],
    default: "Pending",
  },
});

const Settlement = mongoose.model("Settlement", settlementSchema);
export default Settlement;
