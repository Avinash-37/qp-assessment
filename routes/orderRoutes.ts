import { Router } from "express";
import { createOrder, getOrders, getOrderDetails } from "../controllers/orderController";
import { authenticate } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", authenticate, createOrder);
router.get("/:userId", authenticate, getOrders);
router.get("/details/:id", authenticate, getOrderDetails);

export default router;
