import mongoose, { Schema } from "mongoose";

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
    required: true,
  },

  regNo: {
    type: String,
    required: true,
  },

  verificationStatus: {
    type: String,
    enum: ["Pending", "Verified"],
  },
});

const Organization = mongoose.model("Organization", organizationSchema);
export default Organization;
