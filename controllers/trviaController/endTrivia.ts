import { RequestHandler } from "express";
import { where } from "sequelize";
import Question from "../../models/question";
import UsersAnswers from "../../models/usersAnswers";

const endTrivia: RequestHandler = async (req, res) => {
  try {
    const trivId = Number(req.params.id);
    const questions = await Question.findAll({
      where: { triviaId: trivId },
    });
    //traer todas las preguntas
    //traerme todos los posibles ids de respuestas
    //checkear en respuestas de usuario cuales eligio.
    //verificar cuales son correctas y calcular score
    //guardar score del usuario
    console.log(questions);
  } catch (error) {}

  res.locals.user.id;
};

export default endTrivia;
