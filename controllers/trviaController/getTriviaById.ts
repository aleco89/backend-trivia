import Trivia from "../../models/trivia";

const getTriviaById = async (id: number) => {
  try {
    const trivia = await Trivia.findByPk(id);
    return trivia;
  } catch (err) {
    return err;
  }
};

export default getTriviaById;
