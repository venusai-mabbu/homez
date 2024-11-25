import Chat from "../models/Chat.js";
import User from "../models/User.js";

export const getChats = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    // Find chats where the user is a participant
    const chats = await Chat.find({
      userIDs: { $in: [tokenUserId] },
    });

    for (const chat of chats) {
      // Find the receiver ID by excluding the current user
      const receiverId = chat.userIDs.find((id) => id.toString() !== tokenUserId);

      // Get receiver's details
      const receiver = await User.findById(receiverId, {
        id: 1,
        username: 1,
        avatar: 1,
      });
      chat.receiver = receiver;
    }

    res.status(200).json(chats);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get chats!" });
  }
};

export const getChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    // Find the chat and include messages sorted by creation date
    const chat = await Chat.findOne({
      _id: req.params.id,
      userIDs: { $in: [tokenUserId] },
    }).populate({
      path: "messages",
      options: { sort: { createdAt: "asc" } },
    });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found!" });
    }

    // Update the chat's seenBy field by adding the user's ID if not already present
    if (!chat.seenBy.includes(tokenUserId)) {
      chat.seenBy.push(tokenUserId);
      await chat.save();
    }

    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get chat!" });
  }
};

export const addChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    // Create a new chat with the tokenUserId and receiverId
    const newChat = await Chat.create({
      userIDs: [tokenUserId, req.body.receiverId],
    });

    res.status(200).json(newChat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add chat!" });
  }
};

export const readChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    // Find and update the chat to set seenBy with the tokenUserId
    const chat = await Chat.findOneAndUpdate(
      {
        _id: req.params.id,
        userIDs: { $in: [tokenUserId] },
      },
      { $addToSet: { seenBy: tokenUserId } },
      { new: true }
    );

    if (!chat) {
      return res.status(404).json({ message: "Chat not found!" });
    }

    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to read chat!" });
  }
};
