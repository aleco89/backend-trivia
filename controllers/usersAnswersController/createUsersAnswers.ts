import { RequestHandler } from "express";
import UsersAnswers from "../../models/usersAnswers";
import UsersAnswersCreationAttributes from "../../models/usersAnswers";

const createUsersAnswers: RequestHandler = async (req, res) => {
  try {
    const userAnswer = req.body as UsersAnswersCreationAttributes;
    const userRes = await UsersAnswers.create(userAnswer);
    return res.status(201).json(userRes);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default createUsersAnswers;
