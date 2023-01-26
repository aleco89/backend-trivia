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
import Trivia from "./trivia";

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

  @ForeignKey(() => Trivia)
  @Column
  triviaId: number;
  @BelongsTo(() => Trivia)
  trivia: Trivia;
}

export default Question;
