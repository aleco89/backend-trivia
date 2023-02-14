import { RequestHandler } from "express";

import bcrypt from "bcrypt";
import User from "../../models/user";
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

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

  if (regUser.password == null) {
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

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(regUser.password, salt, async function (err, hash) {
      await User.create({
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
    });
  });
};

export default register;
