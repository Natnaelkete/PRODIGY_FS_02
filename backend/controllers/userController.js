import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

export const Signup = asyncHandler(async (req, res, next) => {
  try {
    const { username, email, password, isAdmin } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      res.status(400);
      throw new Error("User already exist");
    }

    const newUser = await User.create({
      username,
      email,
      password,
      isAdmin,
    });

    if (newUser) {
      generateToken(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error("User already exists");
    }
  } catch (error) {
    console.log(`Signup error ${error.message}`);
    next(error);
  }
});

export const Login = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      generateToken(user._id, res);

      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    console.log(`Login Error ${error.message}`);
  }
});

export const Logout = asyncHandler(async (req, res, next) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(`Logout Error ${error.message}`);
    next(error);
  }
});

export const updateUser = asyncHandler(async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const user = await User.findOne({ _id: req.user._id });

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    user.email = email || user.email;
    user.username = username || user.username;
    user.password = password || user.password;

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      email: updatedUser.email,
      username: updatedUser.username,
    });
  } catch (error) {
    console.log(`Login Error ${error.message}`);
  }
});
