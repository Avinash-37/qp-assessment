import { Router } from "express";
import { register, login,getUserList } from "../controllers/userController";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getUserList", getUserList);

export default router;
