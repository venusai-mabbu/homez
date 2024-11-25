import mongoose from "mongoose";
const { Schema } = mongoose;

// Chat Schema
const ChatSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
  seenBy: [{ type: Schema.Types.ObjectId }],
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  lastMessage: { type: String }
});

// Export the Chat model
const Chat = mongoose.model("Chat", ChatSchema);
export default Chat;
