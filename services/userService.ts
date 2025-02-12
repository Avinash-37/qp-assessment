import User from "../models/User";
import { hashPassword, comparePassword, generateToken } from "../utils/auth";

export const registerUser = async (email: string, password: string, role: "admin" | "user") => {
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await hashPassword(password);
  const newUser = await User.create({ email, password: hashedPassword, role });

  return generateToken(newUser.id, newUser.role);
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ where: { email } });
  console.log("--login-service----",user);
  if (!user) throw new Error("Invalid credentials");

  const isPasswordValid = await comparePassword(password, user.dataValues.password);
  if (!isPasswordValid) throw new Error("Invalid credentials");

  return generateToken(user.dataValues.id, user.dataValues.role);
};

export const getAllUserList = async () => {
    const userList = await User.findAll({});
    if (!userList) throw new Error("Invalid credentials");
  
    return userList;
  };
