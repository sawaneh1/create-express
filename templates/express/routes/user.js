import express from "express";
import { login, registetUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registetUser);
router.post("/login", login);

export default router;
