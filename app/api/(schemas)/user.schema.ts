import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new mongoose.Schema({
  walletAddress: {
    type: String,
    unique: true,
  },

  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
