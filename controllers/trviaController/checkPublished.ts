import { RequestHandler } from "express";
import Trivia from "../../models/trivia";
import getTriviaById from "./getTriviaById";

const checkPublished = async (id: number) => {
  try {
    const trivia = (await Trivia.findByPk(id)) as Trivia;
    if (!trivia) {
      throw new Error(
        `Can not check the trivia with id ${id} because it was not found`
      );
    }
    return trivia.published;
  } catch (err) {
    return err;
  }
};

export default checkPublished;
