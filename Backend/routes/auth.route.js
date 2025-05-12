import express from "express";
import {
  signup,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  changePassword,
  checkAuthentication,
} from "../controllers/auth.controller.js";
import protectedRoute from "../middleware/protectedRoutes.js";

const router = express.Router();

router.get("/checkAuthentication", protectedRoute, checkAuthentication);

router.post("/signup", signup);
router.post("/verify-email", verifyEmail);
router.post("/login", login);
router.get("/logout", logout);
router.post("/forgotPassword", forgotPassword);
router.post("/changePassword/:resetToken", changePassword);

export default router;
