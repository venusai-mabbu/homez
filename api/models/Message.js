import mongoose from "mongoose";
const { Schema } = mongoose;

// Message Schema
const MessageSchema = new Schema({
  text: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  chat: { type: Schema.Types.ObjectId, ref: "Chat", required: true },
  createdAt: { type: Date, default: Date.now }
});

// Export the Message model
const Message = mongoose.model("Message", MessageSchema);
export default Message;
