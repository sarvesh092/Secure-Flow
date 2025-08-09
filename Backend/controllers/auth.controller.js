import { User } from "../models/user.model.js";
import { generateJwtTokenAndCookie } from "../utils/generateJwtTokenAndCookie.js";
import { getVerificationToken } from "../utils/getVerificationToken.js";
import mongoose from "mongoose";
import {
  sendVerificationMail,
  welcomeEmail,
  sendResetPasswordMail,
  sendPasswordChangedsuccessfully,
} from "../mailtrap/email.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    if (!username || !email || !password) {
      throw new Error("All fields are required");
    }

    const userExistAlready = await User.findOne({
      $or: [{ username }, { email }],
    }).session(session);

    if (userExistAlready) {
      throw new Error("User already exists");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const verificationToken = getVerificationToken();
    const user = new User({
      username,
      email,
      password: encryptedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save({ session });
    await sendVerificationMail(user.email, verificationToken);
    // If email is sent successfully, commit the transaction
    await session.commitTransaction();

    generateJwtTokenAndCookie(res, user._id);
    const newUser = await User.findById(user.id).select("-password");

    res.status(200).json({
      success: true,
      message:
        "User created successfully! Please check your email to verify your account.",
      user: newUser,
    });
  } catch (error) {
    // If any error occurs, abort the transaction
    await session.abortTransaction();
    console.error("Error in signup:", error);

    if (
      error.message.includes(
        "Demo domains can only be used to send emails to account owners"
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please use a different email address for testing. Demo email services have restrictions.",
      });
    }

    res.status(400).json({
      success: false,
      message: error.message || "Failed to create user. Please try again.",
    });
  } finally {
    session.endSession();
  }
};

const verifyEmail = async (req, res) => {
  const { code } = req.body;

  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "invalid or expired verification code",
      });
    }
    (user.isVerified = true), (user.verificationToken = undefined);
    user.verificationTokenExpiresAt = undefined;

    await user.save();

    await welcomeEmail(user.username, user.email);
    console.log("Welcome email sent successfully");
    return res.status(200).json({
      success: true,
      message: "Email verified successfully!!",
      user: { ...user._doc, password: undefined },
    });
  } catch (error) {
    console.error(`Unable to send welcome email`, error.message);
    throw new Error(`something went wrong, ${error}`);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error(`Email and password is required`);
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ messsage: "invalid email id" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "incorrect password" });
    }
    generateJwtTokenAndCookie(res, user._id);
    user.lastlogin = Date.now();

    await user.save();

    res.status(200).json({
      success: true,
      message: "user logged in succesfully!!",
      user: { ...user._doc, password: undefined },
    });
  } catch (error) {
    console.log("Error in login ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res
      .status(200)
      .json({ success: true, message: "logout Successfully!!" });
  } catch (error) {
    console.error("Error logging out user", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to logout user",
    });
  }
};
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      throw new Error("Email is required");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    const resetPasswordToken = crypto.randomBytes(20).toString("hex");
    const resetPasswordExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpiresAt = resetPasswordExpiresAt;

    await user.save();
    await sendResetPasswordMail(
      email,
      `${process.env.URL}/forgotPassword/${resetPasswordToken}`
    );
    res.status(200).json({
      success: true,
      message: "password reset link sent successfully",
    });
  } catch (error) {
    console.log("Error sending reset password link", error);
    res.status(400).json({ success: true, message: error.message });
  }
};
const changePassword = async (req, res) => {
  const { resetToken } = req.params;
  const { newPassword } = req.body;
  try {
    const user = await User.findOne({
      resetPasswordToken: resetToken,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Password did not match" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;

    await user.save();

    await sendPasswordChangedsuccessfully(user.email);
    res
      .status(200)
      .json({ success: true, message: "Password Changed Successfully!!" });
  } catch (error) {
    res.status(400).json({ success: false, message: `${error.message}` });
  }
};

const checkAuthentication = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("Error in Authentication ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
export {
  login,
  signup,
  logout,
  verifyEmail,
  forgotPassword,
  changePassword,
  checkAuthentication,
};
