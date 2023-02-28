import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import User from "../../models/user";

const saltRounds = 10;

type ReqBody = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
  avatar: string;
};

const register: RequestHandler = (req, res) => {
  try {
    const regUser = req.body as ReqBody;

    if (!regUser.firstName) {
      return res.status(400).json({ message: "first name is needed" });
    }
    if (!regUser.lastName) {
      return res.status(400).json({ message: "last lastname is needed" });
    }
    if (!regUser.email) {
      return res.status(400).json({ message: "email is needed" });
    }
    if (!regUser.avatar) {
      return res.status(400).json({ message: "must choose an avatar" });
    }
    if (!regUser.password) {
      return res.status(400).json({ message: "password is needed" });
    }
    if (regUser.password != regUser.repeatPassword) {
      return res.status(400).json({ message: "passwords do not match" });
    }
    if (regUser.password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must have at least 6 characters" });
    }

    const hash = bcrypt.hashSync(regUser.password, saltRounds);

    User.create({
      firstName: regUser.firstName,
      lastName: regUser.lastName,
      email: regUser.email,
      password: hash,
      totalScore: 0,
      triviasSolved: 0,
      avatar: regUser.avatar,
      admin: false,
    });

    return res.status(201).json({ message: "user creation succesfull" });
  } catch (error) {
    const err = error as { message?: string };
    res.status(400).json({ message: err?.message });
  }
};

export default register;
