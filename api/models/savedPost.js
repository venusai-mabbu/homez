import mongoose from "mongoose";
const { Schema } = mongoose;

// SavedPost Schema
const SavedPostSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create a unique index for user and post
SavedPostSchema.index({ user: 1, post: 1 }, { unique: true });

// Export the SavedPost model
const SavedPost = mongoose.model("SavedPost", SavedPostSchema);
export default SavedPost;
