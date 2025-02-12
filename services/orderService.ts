import Order from "../models/Order";
import OrderItem from "../models/OrderItem";
import Grocery from "../models/Grocery";

interface OrderItemRequest {
  groceryId: number;
  quantity: number;
}

export const placeOrder = async (userId: number, items: OrderItemRequest[]) => {
  let totalAmount = 0;

  // Validate and calculate total amount
  for (const item of items) {
    const grocery = await Grocery.findByPk(item.groceryId);
    if (!grocery || grocery.quantity < item.quantity) {
      throw new Error(`Item ${item.groceryId} is out of stock`);
    }
    totalAmount += grocery.price * item.quantity;
  }

  // Create order
  const order = await Order.create({ userId, totalAmount, status: "pending" });

  // Create order items and update inventory
  for (const item of items) {
    const grocery = await Grocery.findByPk(item.groceryId);
    if (!grocery) continue;
    
    await OrderItem.create({
      orderId: order.id,
      groceryId: item.groceryId,
      quantity: item.quantity,
      price: grocery.price,
    });

    await grocery.update({ quantity: grocery.quantity - item.quantity });
  }

  return order;
};

export const getUserOrders = async (userId: number) => {
  return await Order.findAll({
    where: { userId },
    include: [{ model: OrderItem, include: [Grocery] }],
  });
};

export const getOrderById = async (orderId: number) => {
  return await Order.findByPk(orderId, { include: [{ model: OrderItem, include: [Grocery] }] });
};
