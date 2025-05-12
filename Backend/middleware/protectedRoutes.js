import jwt from "jsonwebtoken";

const protectedRoute = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res
      .status(401)
      .json({ status: false, message: "Unauthorized - no token" });
  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SCERET);
    if (!decodedToken)
      return res.status(401).json({ success: false, message: "invalid token" });

    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.log("Error in verifacation ", error);
    return res.status(500).json({ success: false, message: "Unauthorized" });
  }
};
export default protectedRoute;
