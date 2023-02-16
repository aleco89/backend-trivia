import { RequestHandler } from "express";

import bcrypt from "bcrypt";
import User from "../../models/user";
const saltRounds = 10;

type ReqBody = {
  email: string;
  password: string;
};

const login: RequestHandler = async (req, res) => {
  const logUser = req.body as ReqBody;

  const user = (await User.findOne({
    where: {
      email: logUser.email,
    },
  })) as User;
  if (user == null) {
    return res.status(400).json({ message: "Wrong user or password" });
  }
  const isSame = bcrypt.compareSync(logUser.password, user.password);
  if (isSame) {
    return res.status(200).json(user);
  } else {
    return res.status(400).json({ message: "Wrong user or password" });
  }
};

export default login;
