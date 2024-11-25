import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from 'dotenv';
dotenv.config();

// Registration function
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
   
    // Create a new user and save to DB
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

// Login function
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ username });

    if (!user) return res.status(400).json({ message: "Invalid Credentials!" });

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid Credentials!" });

    // Generate JWT token
    const age = 1000 * 60 * 60 * 24 * 7; // 7 days

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: false, // Change this based on your user roles
      },
      process.env.JWT_SECRET_KEY, // Ensure this is set in your environment
      { expiresIn: age }
    );
    req.userId=user._id.toString();
    console.log(req.userId);
    // Exclude password from user info
    const { password: userPassword, ...userInfo } = user._doc;

    // Set cookie and send response
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: age,
      })
      .status(200)
      .json(userInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to login!" });
  }
};

// Logout function
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
