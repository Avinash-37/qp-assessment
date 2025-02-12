import { Request, Response } from "express";
import { addGrocery, getAllGroceries, getGroceryById, updateGrocery, deleteGrocery } from "../services/groceryService";
import {successResponse,alreadyExist,errorResponse} from "../helpers/apiResponse";


export const createGrocery = async (req: Request, res: Response) => {
  try {
    const { name, price, quantity } = req.body;
    const grocery = await addGrocery(name, price, quantity);
    successResponse(res,"Successfully created",grocery,"","","");
  } catch (error) {
    errorResponse(res,"Error in createGrocery","","","",error.message);
  }
};


export const getGroceries = async (req: Request, res: Response) => {
  try {
    const groceries = await getAllGroceries();
    successResponse(res,"Get all Groceries",groceries,"","","");
  } catch (error) {
    errorResponse(res,"Error in getGroceries","","","",error.message);
  }
};

export const getGrocery = async (req: Request, res: Response) => {
  try {
    const grocery = await getGroceryById(parseInt(req.params.id));
    // if (!grocery) return res.status(404).json({ error: "Grocery item not found" });
    successResponse(res,"Groceries found",grocery,"","","");
  } catch (error) {
    errorResponse(res,"Error in getGrocery","","","",error.message);
  }
};

export const editGrocery = async (req: Request, res: Response) => {
  try {
    const { name, price, quantity } = req.body;
    const grocery = await updateGrocery(parseInt(req.params.id), name, price, quantity);
    successResponse(res,"Edited Successful",grocery,"","","");
  } catch (error) {
    errorResponse(res,"Error in editGrocery","","","",error.message);
  }
};

export const removeGrocery = async (req: Request, res: Response) => {
  try {
    const response = await deleteGrocery(parseInt(req.params.id));
    successResponse(res,"grocery remove",response,"","","");
  } catch (error) {
    errorResponse(res,"Error in removeGrocery","","","",error.message);
  }
};
