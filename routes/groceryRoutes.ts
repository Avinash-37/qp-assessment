import { Router } from "express";
import { createGrocery, getGroceries, getGrocery, editGrocery, removeGrocery } from "../controllers/groceryController";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", authenticate, authorizeAdmin, createGrocery);
router.get("/", authenticate, getGroceries);
router.get("/:id", authenticate,getGrocery);
router.put("/:id", authenticate, authorizeAdmin, editGrocery);
router.delete("/:id", authenticate, authorizeAdmin, removeGrocery);

export default router;
