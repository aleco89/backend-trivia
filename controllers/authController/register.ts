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
  const regUser = req.body as ReqBody;
  console.log(regUser);
  if (!regUser.firstName) {
    return res.status(400).json({ message: "first name is needed" });
  }
  if (!regUser.lastName) {
    return res.status(400).json({ message: "last name is needed" });
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

  bcrypt.hash(regUser.password, saltRounds, async function (err, hash) {
    // Store hash in your password DB.
    await User.create({
      firstName: regUser.firstName,
      lastName: regUser.lastName,
      email: regUser.email,
      password: hash,
      totalScore: 0,
      triviasSolved: 0,
      avatar: regUser.avatar,
      admin: true,
    });
    return res.status(201).json({ message: "user creation succesfull" });
  });
};

export default register;
