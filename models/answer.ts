"use strict";
import { Optional } from "sequelize";
import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

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
  @Column
  questionId: number;
}

export default Answer;
