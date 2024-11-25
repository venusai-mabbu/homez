import mongoose from "mongoose";
const { Schema } = mongoose;

// User Schema
const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
  createdAt: { type: Date, default: Date.now },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  savedPosts: [{ type: Schema.Types.ObjectId, ref: "SavedPost" }],
  chats: [{ type: Schema.Types.ObjectId, ref: "Chat" }],
  chatIDs: [{ type: Schema.Types.ObjectId }]
});

// Export the User model
const User = mongoose.model("User", UserSchema);
export default User;
