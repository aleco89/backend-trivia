import { RequestHandler } from "express";
import Answer from "../../models/answer";
import Question from "../../models/question";
import QuestionCreationAttributes from "../../models/question";

const createQuestion: RequestHandler = async (req, res) => {
  try {
    const questionAttributes = req.body as QuestionCreationAttributes;
    const question = await Question.create(questionAttributes, {
      include: [Answer],
    });
    return res.status(201).json(question);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default createQuestion;
