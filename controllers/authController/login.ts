import { RequestHandler } from "express";

import bcrypt from "bcrypt";
import User from "../../models/user";
const saltRounds = 10;

type ReqBody = {
  email: string;
  password: string;
};

const login: RequestHandler = (req, res) => {
  const logUser = req.body as ReqBody;

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(logUser.password, salt, async function (err, hash) {
      const user = await User.findOne({
        where: {
          email: logUser.email,
          password: hash,
        },
      });
      return res.status(200).json(user);
    });
  });
};

export default login;
