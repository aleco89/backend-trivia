import { RequestHandler } from "express";
import Trivia from "../../models/trivia";
import TriviaCreationAttributes from "../../models/trivia";

const createTrivia: RequestHandler = async (req, res) => {
  try {
    const triviaAttributes = req.body as TriviaCreationAttributes;
    const trivia = await Trivia.create(triviaAttributes);
    return res.status(201).json(trivia);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default createTrivia;
