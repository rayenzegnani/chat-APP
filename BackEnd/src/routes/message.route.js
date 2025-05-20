import express from "express";
import { protectRoute } from "../middlleware/auth.middlleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controle.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

export default router;