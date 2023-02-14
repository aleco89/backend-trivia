import { RequestHandler, RequestParamHandler } from "express";
import Trivia from "../../models/trivia";

const getTriviaByID: RequestParamHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const trivia = await Trivia.findByPk(id);
    if (trivia === null) {
      res.status(400).json({ message: "the trivia does not exists" });
    } else {
      return res.status(200).json(trivia);
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getTriviaByID;
