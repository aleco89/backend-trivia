import { RequestHandler } from "express";
import Question from "../../models/question";
import Answer from "../../models/answer";

const getQuestion: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const questions = await Question.findAll({
      where: { triviaId: id },
      include: [{ model: Answer, attributes: ["id", "answer"] }],
    });
    return res.status(200).json(questions);
  } catch (err) {
    return res.status(400).json(err);
  }
};
/*
    Funcionando OK!
*/

export default getQuestion;
