import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import Order from "./Order";
import Grocery from "./Grocery";

interface OrderItemAttributes {
  id?: number;
  orderId: number;
  groceryId: number;
  quantity: number;
  price: number;
}

class OrderItem extends Model<OrderItemAttributes> implements OrderItemAttributes {
  public id!: number;
  public orderId!: number;
  public groceryId!: number;
  public quantity!: number;
  public price!: number;
}

OrderItem.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    orderId: { type: DataTypes.INTEGER, allowNull: false },
    groceryId: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
  },
  {
    sequelize,
    tableName: "order_items",
  }
);

export default OrderItem;
