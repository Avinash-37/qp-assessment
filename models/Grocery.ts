import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

interface GroceryAttributes {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class Grocery extends Model<GroceryAttributes> implements GroceryAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public quantity!: number;
}

Grocery.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    tableName: "groceries",
  }
);

export default Grocery;
