import { RequestHandler } from "express";
import Trivia from "../../models/trivia";

const getAllTrivias: RequestHandler = async (req, res) => {
  try {
    const trivias = await Trivia.findAll();
    return res.status(200).json(trivias);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default getAllTrivias;
