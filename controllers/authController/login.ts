import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import User from "../../models/user";
import jwt from "jsonwebtoken";
const saltRounds = 10;

type ReqBody = {
  email: string;
  password: string;
};

const login: RequestHandler = async (req, res) => {
  try {
    const logUser = req.body as ReqBody;

    const user = (await User.findOne({
      where: {
        email: logUser.email,
      },
    })) as User;

    if (!user) {
      return res.status(400).json({ message: "user or password not valid" });
    }
    const userMatch = bcrypt.compareSync(logUser.password, user.password);

    if (userMatch) {
      const token = jwt.sign(
        {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        "lALigadelaEsculIta"
      );
      return res.status(200).json({ payload: { token } });
    } else {
      return res.status(400).json({ message: "user or password not valid" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default login;
