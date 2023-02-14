import { RequestHandler } from "express";
import Trivia from "../../models/trivia";
import TriviaCreationAttributes from "../../models/trivia";

const createTrivia: RequestHandler = async (req, res) => {
  try {
    const triviaAttributes = req.body as TriviaCreationAttributes;
    /*if (Trivia.findOne({ where: { title: triviaAttributes.title } }) !== null) {
      res.status(400).json({
        message: "can not create the trivia because it already exists",
      });
    } else {*/
    const trivia = await Trivia.create(triviaAttributes);
    console.log(trivia);
    return res.status(201).json(trivia);
    //}
  } catch (err) {
    return res.status(400).json(err);
  }
};

/*
JSon to create trivia:
  title: string;
  description: string;
  questionQuantity: number;
  categoryId: number;
  
*/
export default createTrivia;
