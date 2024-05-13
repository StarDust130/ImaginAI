import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is missing 😕"],
      unique: true,
    },
    photo: {
      type: String,
      required: [true, "Photo is missing 😕"],
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    clerkId: {
      type: String,
      required: [true, "Clerk ID is missing 😕"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is missing 😕"],
      unique: true,
    },
    planId: {
      type: Number,
      default: 1,
    },
    creditBalance: {
      type: Number,
      required: [true, "Credit Balance is missing 😕"],
      default: 10,
    },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model("User", UserSchema);

export default User;
