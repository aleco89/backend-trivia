import { RequestHandler } from "express";
import checkLogin from "./checkLogin";
import User from "../models/user";

const checkAdmin: RequestHandler = async (req, res, next) => {
  try {
    const user = res.locals.user;
    console.log("este es el user " + user);
    const userAdmin = await User.findByPk(user.id, {
      attributes: ["admin"],
    });
    console.log("aca dice si es admin" + userAdmin);
    if (userAdmin) {
      next();
    } else {
      throw new Error("the user can not access");
    }
  } catch (error) {
    const err = error as { message?: string };
    res.status(400).json({ message: err?.message });
  }
};

export default checkAdmin;
