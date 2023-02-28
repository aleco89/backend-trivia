import { RequestHandler } from "express";
import Trivia from "../../models/trivia";
import getTriviaById from "./getTriviaById";
import TriviaCreationAttributes from "../../models/trivia";

const upateTrivia: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const toUpdate = req.body as TriviaCreationAttributes;
    const trivia = (await getTriviaById(id)) as Trivia;
    if (!trivia)
      return res.status(400).json({
        message: "can not edit the trivia because it does not exists",
      });
    if (trivia.published == false) {
      await trivia.update(toUpdate);
      return res.status(200).json(trivia);
    } else {
      return res.status(400).json({
        message: "can not edit trivia beacause it was already published",
      });
    }
  } catch (error) {
    const err = error as { message?: string };
    res.status(400).json({ message: err?.message });
  }
};

export default upateTrivia;
