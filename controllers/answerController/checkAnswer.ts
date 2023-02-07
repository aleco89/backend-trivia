import { RequestHandler } from "express";
import Answer from "../../models/answer";

const checkAnswer: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const isCorrect = await Answer.findByPk(id, {
      attributes: ["isCorrect"],
    });
    if (isCorrect === null) {
      res.status(400).json({ message: "can not find the answer" });
    } else {
      return res.status(200).json(isCorrect);
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default checkAnswer;
