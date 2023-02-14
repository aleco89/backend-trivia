import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import config from "./config.json";
import User from "../models/user";
import Answer from "../models/answer";
import Category from "../models/category";
import Question from "../models/question";
import Trivia from "../models/trivia";
import TriviasAnswered from "../models/userAnswers";

const local = config.local;

const sequelize = new Sequelize(
  local.database,
  local.username,
  local.password,
  {
    host: local.host,
    dialect: local.dialect as "mysql",
    port: local.port,
    models: [User, Answer, Category, Question, Trivia, TriviasAnswered],
  } as SequelizeOptions
);

export default sequelize;
