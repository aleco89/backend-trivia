"use strict";
import { Optional } from "sequelize";
import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

interface QuestionAttributes {
  id: number;
  question: string;
  triviaId: number;
}
interface QuestionCreationAttributes
  extends Optional<QuestionAttributes, "id"> {}

@Table
class Question
  extends Model<QuestionAttributes, QuestionCreationAttributes>
  implements QuestionAttributes
{
  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true,
  })
  id: number;
  @Column
  question: string;
  @Column
  triviaId: number;
}

export default Question;
