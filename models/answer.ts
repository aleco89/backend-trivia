"use strict";
import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Question from "./question";
import QuestionCreationAttributes from "./question";

interface AnswerAttributes {
  id: number;
  answer: string;
  isCorrect: boolean;
  questionId: number;
  question?: QuestionCreationAttributes;
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
}

export default Answer;
