import { RequestHandler } from "express";
import User from "../../models/user";

const updateUser: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const userNewData = req.body;
    const userUpdate = await User.update(
      {
        firstName: userNewData.firstName,
        lastName: userNewData.lastName,
        avatar: userNewData.avatar,
      },
      { where: { id: id } }
    );
    return res.status(200).json(userUpdate);
  } catch (err) {
    return res.status(400).json(err);
  }
};

/*
id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  totalScore: number;
  triviasSolved: number;
  avatar: string;
  admin: boolean;
  triviasAnswered?: TriviasAnswered[];
*/

export default updateUser;
