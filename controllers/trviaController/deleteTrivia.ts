import { RequestHandler } from "express";
import Trivia from "../../models/trivia";

const deleteTrivia: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    await Trivia.destroy({
      where: {
        id: id,
        //incluir preguntas y respuestas. Borrar rtas en cascadas e indicar que borre las preguntas con triviaId= id pasado
      },
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default deleteTrivia;
