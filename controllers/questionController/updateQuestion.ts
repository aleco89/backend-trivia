import { RequestHandler } from "express";
import Answer from "../../models/answer";
import Question from "../../models/question";
import QuestionCreationAttributes from "../../models/question";
import checkPublished from "../trviaController/checkPublished";

const createQuestion: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const questionAttributes = req.body as QuestionCreationAttributes;
    const toUpdateQuestion = await Question.findByPk(questionAttributes.id);

    if (!toUpdateQuestion) {
      return res.status(400).json({
        message: "can not edit the question because it does not exists",
      });
    }
    if ((await checkPublished(toUpdateQuestion.triviaId)) == false) {
      const updatedQuestion = await toUpdateQuestion.update(
        questionAttributes,
        questionAttributes,
        { include: [Answer] },
        { where: { id: questionAttributes.id } }
      );
      return res.status(200).json(updatedQuestion);
    } else {
      return res.status(400).json({
        message:
          "can not edit the question beacause the trivia was already published",
      });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default createQuestion;
