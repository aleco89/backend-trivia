import { RequestHandler } from "express";
import Trivia from "../../models/trivia";
import getTriviaById from "./getTriviaById";

const deleteTrivia: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const trivia = (await getTriviaById(id)) as Trivia;
    if (trivia == null)
      return res.status(400).json({ message: "the trivia does not exists" });
    if (trivia.published == false) {
      await trivia.destroy();
      return res.status(200).json({ message: "trivia deleted" });
    } else {
      return res.status(400).json({
        message: "can not delete trivia beacause it was already published",
      });
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default deleteTrivia;
