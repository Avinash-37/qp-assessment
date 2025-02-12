import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import Grocery from "./Grocery";
import User from "./User";

interface OrderAttributes {
  id?: number;
  userId: number;
  totalAmount: number;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Order extends Model<OrderAttributes> implements OrderAttributes {
  public id!: number;
  public userId!: number;
  public totalAmount!: number;
  public status!: string;
}

Order.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    totalAmount: { type: DataTypes.FLOAT, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: "pending" },
  },
  {
    sequelize,
    tableName: "orders",
  }
);

export default Order;
