"use strict";
import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import Question from "./question";
import QuestionCreationAttributes from "./question";
import UsersAnswers from "./usersAnswers";

interface AnswerAttributes {
  id: number;
  answer: string;
  isCorrect: boolean;
  questionId: number;
  question?: QuestionCreationAttributes;
  usersAnswers?: UsersAnswers[];
}
interface AnswerCreationAttributes extends Optional<AnswerAttributes, "id"> {}

@Table({
  tableName: "answers",
})
class Answer
  extends Model<AnswerAttributes, AnswerCreationAttributes>
  implements AnswerAttributes
{
  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column
  answer: string;

  @Column
  isCorrect: boolean;

  @ForeignKey(() => Question)
  @Column
  questionId: number;
  @BelongsTo(() => Question)
  question: Question;

  @HasMany(() => UsersAnswers, { onDelete: "cascade" })
  usersAnswers: UsersAnswers[];
}

export default Answer;
