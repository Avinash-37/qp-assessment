import { Request, Response } from "express";
import { registerUser, loginUser,getAllUserList } from "../services/userService";
import {successResponse,alreadyExist,errorResponse} from "../helpers/apiResponse";

export const register = async (req: Request, res: Response) => {
  try {
    console.log("------register----",req?.body)
    const { email, password, role } = req.body;
    const regiteredData = await registerUser(email, password, role);
    successResponse(res,"Successfully registered",regiteredData,"","","");
  } catch (error) {
    errorResponse(res,"Error in registration","","","",error.message);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    console.log("------login----",req?.body)
    const { email, password } = req.body;
    const userToken = await loginUser(email, password);
    successResponse(res,"Login Successfully",userToken,"","","");
  } catch (error) {
    errorResponse(res,"Error in registration","","","",error.message);
  }
};

export const getUserList = async (req: Request, res: Response) => {
    try {
      const userListAll = await getAllUserList();
      successResponse(res,"Found Successfully",userListAll,"","","");
    } catch (error) {
      errorResponse(res,"Error in registration","","","",error.message);
    }
  };
