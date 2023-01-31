import { RequestHandler } from "express";
import User from "../../models/user";
import UserAttributes from "../../models/user";

type UserDto = {
  firstName: string;
  lastName: string;
  email: string;
  totalScore: number;
  triviasSolved: number;
  avatar: string;
};

const getUserById: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const userData: UserAttributes = await User.findByPk(id);
    const resUser: UserDto;

    resUser.firstName = userData.firstName;
    resUser.lastName = userData.lastName;
    resUser.email = userData.email;
    resUser.totalScore = userData.totalScore;
    resUser.triviasSolved = userData.triviasSolved;
    resUser.avatar = UserData.avatar;

    return res.status(200).json(resUser);
  } catch (err) {
    return res.status(400).json(err);
  }
};

/*
interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  totalScore: number;
  triviasSolved: number;
  avatar: string;
  admin: boolean;
  triviasAnswered?: TriviasAnswered[];
  //triviaAnswered:TriviaAnswerCreationAtributes
}
*/

export default getUserById;
