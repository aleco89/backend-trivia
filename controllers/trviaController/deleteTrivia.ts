import { RequestHandler } from "express";
import Trivia from "../../models/trivia";

const deleteTrivia: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    await Trivia.destroy({
      where: {
        id: id,
      },
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default deleteTrivia;
