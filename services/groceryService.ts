import Grocery from "../models/Grocery";

export const addGrocery = async (name: string, price: number, quantity: number) => {
  return await Grocery.create({ name, price, quantity });
};

export const getAllGroceries = async () => {
  return await Grocery.findAll();
};

export const getGroceryById = async (id: number) => {
  return await Grocery.findByPk(id);
};

export const updateGrocery = async (id: number, name?: string, price?: number, quantity?: number) => {
  const grocery = await Grocery.findByPk(id);
  if (!grocery) throw new Error("Grocery item not found");

  await grocery.update({ name, price, quantity });
  return grocery;
};

export const deleteGrocery = async (id: number) => {
  const grocery = await Grocery.findByPk(id);
  if (!grocery) throw new Error("Grocery item not found");

  await grocery.destroy();
  return { message: "Grocery item deleted" };
};
