import { RequestHandler } from "express";
import UsersAnswers from "../../models/usersAnswers";
import UsersAnswersAttributes from "../../models/usersAnswers";
import Answer from "../../models/answer";

const createUsersAnswers: RequestHandler = async (req, res) => {
  try {
    const userAnswer = req.body as UsersAnswersAttributes;
    await UsersAnswers.create(userAnswer);
    const isCorrect = await Answer.findByPk(userAnswer.answerId, {
      attributes: ["isCorrect"],
    });
    console.log(isCorrect);
    return res.status(201).json(isCorrect);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default createUsersAnswers;
