import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {authenticationError,invalidTokenAccessDenied} from "../helpers/apiResponse";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction): void => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      authenticationError(res,"Unauthorized","","","","Unauthorized");
      return;
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    invalidTokenAccessDenied(res,"Invalid token","","","","Invalid token");
  }
};

export const authorizeAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (!req.user || req.user.role !== "admin") {
    invalidTokenAccessDenied(res,"Access denied. Admins only.","","","","Access denied. Admins only.");
    return;
  }
  next();
};
