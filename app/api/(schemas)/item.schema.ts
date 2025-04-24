import mongoose, { Schema } from "mongoose";

const itemSchema = new mongoose.Schema({
  itemId: {
    type: String,
    required: true,
    unique: true,
  },

  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  sellerWalletAddress: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  isAvailable: {
    type: Boolean,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
