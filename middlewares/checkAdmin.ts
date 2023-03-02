import { RequestHandler } from "express";
import User from "../models/user";

const checkAdmin: RequestHandler = async (req, res, next) => {
  try {
    const user = res.locals.user;

    const userAdmin = (await User.findByPk(user.id, {
      attributes: ["admin"],
      raw: true,
    })) as User;

    if (userAdmin.admin == true) {
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
