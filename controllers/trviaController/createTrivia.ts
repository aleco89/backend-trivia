import { RequestHandler } from "express";
import Trivia from "../../models/trivia";
import TriviaCreationAttributes from "../../models/trivia";
import Question from "../../models/question";

const createTrivia: RequestHandler = async (req, res) => {
  try {
    const triviaAttributes = req.body as TriviaCreationAttributes;
    const trivia = await Trivia.create(triviaAttributes, {
      include: [Question],
    });
    return res.status(201).json(trivia);
  } catch (err) {
    return res.status(400).json(err);
  }
};

/*
JSon to create trivia:
{
    "title": "Nombre de una trivia",
    "description": "string",
    "questionQuantity": "3",
    "category": id,
    "questions":[{
                    "question": "pregunta 1",
                    "answers": [{
                        "answer": "respuesta A"
                        "isCorrect": "0"
                    }, {
                        "answer": "respuesta B"
                        "isCorrect": "1"
                    }, {
                        "answer": "respuesta C"
                        "isCorrect": "0"
                    }]
                }, {
                    "question": "pregunta 2",
                    "answers": [{
                        "answer": "respuesta A"
                        "isCorrect": "1"
                    }, {
                        "answer": "respuesta B"
                        "isCorrect": "0"
                    }, {
                        "answer": "respuesta C"
                        "isCorrect": "0"
                    }]
                }, {
                    "question": "pregunta 3",
                    "answers": [{
                        "answer": "respuesta A"
                        "isCorrect": "1"
                    }, {
                        "answer": "respuesta B"
                        "isCorrect": "0"
                    }, {
                        "answer": "respuesta C"
                        "isCorrect": "0"
                    }]
                }
                ]

    }
}


interface QuestionAttributes {
  id: number;
  question: string;
  triviaId: number;
  trivia?: TriviaCreationAttributes;
  answers?: Answer[];
}
*/
export default createTrivia;
