import { RequestHandler } from "express";
import Answer from "../../models/answer";
import Question from "../../models/question";
import checkPublished from "../trviaController/checkPublished";

const updateQuestion: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { question, answers } = req.body;
    const toUpdateQuestion = await Question.findByPk(id);

    if (!toUpdateQuestion) {
      return res.status(400).json({
        message: "can not edit the question because it does not exists",
      });
    }

    if ((await checkPublished(toUpdateQuestion.triviaId)) == false) {
      //Update question
      await Question.update(
        { question },
        {
          where: {
            id: id,
          },
        }
      );

      // Update the answers
      await Promise.all(
        answers.map(
          async ({ id, answer, isCorrect }: { id: number; answer: string; isCorrect: boolean }) => {
            await Answer.update({ answer, isCorrect }, { where: { id } });
          }
        )
      );

      const updatedQuestion = await Question.findByPk(id, {
        include: [{ model: Answer, attributes: ["id", "answer", "isCorrect"] }],
      });

      return res.status(200).json(updatedQuestion);
    } else {
      return res.status(400).json({
        message: "can not edit the question beacause the trivia was already published",
      });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
export default updateQuestion;
