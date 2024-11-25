import Chat from "../models/Chat.js";
import Message from "../models/Message.js";

export const addMessage = async (req, res) => {
  const tokenUserId = req.userId;
  const chatId = req.params.chatId;
  const text = req.body.text;

  try {
    // Find the chat and ensure the user is a participant
    const chat = await Chat.findOne({
      _id: chatId,
      userIDs: { $in: [tokenUserId] },
    });

    if (!chat) return res.status(404).json({ message: "Chat not found!" });

    // Create a new message
    const message = await Message.create({
      text,
      chatId,
      userId: tokenUserId,
    });

    // Update the chat to set seenBy and lastMessage
    chat.seenBy = [tokenUserId];
    chat.lastMessage = text;
    await chat.save();

    res.status(200).json(message);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add message!" });
  }
};
