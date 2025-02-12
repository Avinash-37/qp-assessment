import { Request, Response } from "express";
import { placeOrder, getUserOrders, getOrderById } from "../services/orderService";
import {successResponse,alreadyExist,errorResponse} from "../helpers/apiResponse";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, items } = req.body;
    const order = await placeOrder(userId, items);
    successResponse(res,"Order placed",order,"","","");
  } catch (error) {
    errorResponse(res,"Error in create order","","","",error.message);
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const orders = await getUserOrders(parseInt(userId));
    successResponse(res,"Successfully Get Order",orders,"","","");
  } catch (error) {
    res.status(400).json({ error: error.message });
    errorResponse(res,"Error in get orders","","","",error.message);
  }
};

export const getOrderDetails = async (req: Request, res: Response) => {
  try {
    const order = await getOrderById(parseInt(req.params.id));
    // if (!order) return res.status(404).json({ error: "Order not found" });
    successResponse(res,"Successfully Get Order Details",order,"","","");
  } catch (error) {
    errorResponse(res,"Error in get order details","","","",error.message);
  }
};
