import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";

type Payload = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

const checkLogin: RequestHandler = async (req, res, next) => {
  try {
    if (!req.body) {
      throw new Error("Invalid request");
    }
    if (!req.headers.authorization) {
      throw new Error("Invalid request");
    }
    const token = req.headers.authorization;
    const decoded = jwt.verify(
      token.split("Bearer ")[1],
      "lALigadelaEscuelIta"
    ) as Payload;
    const user = await User.findByPk(decoded.id);
    if (!user) {
      throw new Error("User does not exists");
    }
    //to set user locals.
    res.locals.user = user;
    next();
  } catch (error) {
    const err = error as { message?: string };
    res.status(400).json({ message: err?.message });
  }
};

export default checkLogin;
