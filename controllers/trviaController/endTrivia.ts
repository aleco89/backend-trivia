import { RequestHandler } from "express";
import { where } from "sequelize";
import Question from "../../models/question";
import UsersAnswers from "../../models/usersAnswers";

const endTrivia: RequestHandler = async (req, res) => {
  try {
    const trivId = Number(req.params.id);
    const questions = await Question.findAll({
      where: { triviaId: trivId },
    });
    console.log(questions);
  } catch (error) {}

  res.locals.user.id;
};

export default endTrivia;
