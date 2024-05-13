import mongoose from "mongoose";

export interface Image extends mongoose.Document {
  title: string;
  transformationType: string;
  publicID: string;
  secureUrl: URL;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: string;
  aspectRatio: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}

const ImageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is missing😕"],
    },
    transformationType: {
      type: String,
      required: [true, "Transformation type is missing 😕"],
    },
    publicID: {
      type: String,
      required: [true, "Public ID is missing 😕"],
    },
    secureUrl: {
      type: URL,
      required: [true, "Secure URL is missing 😕"],
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    config: {
      type: Object,
    },
    transformationUrl: {
      type: String,
      required: [true, "URL is missing 😕"],
    },
    aspectRatio: {
      type: String,
    },
    color: {
      type: String,
    },
    prompt: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Image = mongoose.models?.Image || mongoose.model("Image", ImageSchema);

export default Image;
