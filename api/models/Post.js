import mongoose from "mongoose";
const { Schema } = mongoose;

// Enums for Type and Property
const TypeEnum = ["buy", "rent"];
const PropertyEnum = ["apartment", "house", "condo", "land"];

// Post Schema
const PostSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  images: [{ type: String }],
  address: { type: String, required: true },
  city: { type: String, required: true },
  bedroom: { type: Number, required: true },
  bathroom: { type: Number, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  type: { type: String, enum: TypeEnum, required: true },
  property: { type: String, enum: PropertyEnum, required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  
  // postDetail: { type: Schema.Types.ObjectId, ref: "PostDetail" },
  desc: { type: String, required: true },
  utilities: { type: String },
  pet: { type: String },
  income: { type: String },
  size: { type: Number },
  school: { type: Number },
  bus: { type: Number },
  restaurant: { type: Number },
});

// Export the Post model
const Post = mongoose.model("Post", PostSchema);
export default Post;
