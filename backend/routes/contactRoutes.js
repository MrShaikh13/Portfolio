import express from "express";
import contactController from "../controllers/contactController.js";

import validateMiddleware from "../middleware/validateMiddleware.js";

const router = express.Router();

router.post("/", validateMiddleware, contactController);

export default router;
