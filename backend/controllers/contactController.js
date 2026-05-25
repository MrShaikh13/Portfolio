import asyncHandler from "../utils/asycHandler.js";
import { sendEmail } from "../services/emailService.js";

const contactController = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  await sendEmail(name, email, message);
  res.status(200).json({ success: true, message: "Email sent successfully" });
});

export default contactController;
