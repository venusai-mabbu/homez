import User from "../models/User.js";
import Post from "../models/Post.js";
import PostDetail from "../models/PostDetail.js";
import SavedPost from "../models/SavedPost.js";
import Chat from "../models/Chat.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get users!" });
  }
};

export const getUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get user!" });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const { password, avatar, ...inputs } = req.body;

  // if (id !== tokenUserId) {
  //   return res.status(403).json({ message: "Not Authorized!" });
  // }

  try {
    const updatedData = { ...inputs, ...(avatar && { avatar }) };

    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });
    const { password: userPassword, ...rest } = updatedUser.toObject();
    res.status(200).json(rest);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update users!" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete users!" });
  }
};

export const savePost = async (req, res) => {
  const postId = req.body.postId;
  const tokenUserId = req.userId;

  try {
    const savedPost = await SavedPost.findOne({ userId: tokenUserId, postId });

    if (savedPost) {
      await SavedPost.findByIdAndDelete(savedPost._id);
      res.status(200).json({ message: "Post removed from saved list" });
    } else {
      await SavedPost.create({ userId: tokenUserId, postId });
      res.status(200).json({ message: "Post saved" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to save post!" });
  }
};

export const profilePosts = async (req, res) => {
  const tokenUserId = req.userId;
  console.log(tokenUserId);

  try {
    const userPosts = await Post.find({ userId: tokenUserId });
    const saved = await SavedPost.find({ userId: tokenUserId }).populate("post");

    const savedPosts = saved.map((item) => item.post);
    res.status(200).json({ userPosts, savedPosts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get profile posts!" });
  }
};

export const getNotificationNumber = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const number = await Chat.countDocuments({
      userIDs: { $in: [tokenUserId] },
      seenBy: { $ne: tokenUserId },
    });
    res.status(200).json(number);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get notification count!" });
  }
};
