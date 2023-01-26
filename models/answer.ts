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

interface AnswerAttributes {
  id: number;
  answer: string;
  isCorrect: boolean;
  questionId: number;
}
interface AnswerCreationAttributes extends Optional<AnswerAttributes, "id"> {}

@Table
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
