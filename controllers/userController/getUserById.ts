import { RequestHandler } from "express";
import User from "../../models/user";

const getUserById: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const userData = await User.findByPk(id, {
      attributes: ["name", "lastname", "totalScore", "triviasSolved", "avatar"],
    });
    if (userData === null) {
      res.status(400).json({ message: "user does not exists" });
    } else {
      return res.status(200).json(userData);
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getUserById;
