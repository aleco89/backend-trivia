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
import Trivia from "./trivia";
import Answer from "./answer";
import TriviaCreationAttributes from "./trivia";

interface QuestionAttributes {
  id: number;
  question: string;
  triviaId: number;
  trivia?: TriviaCreationAttributes;
  answers?: Answer[];
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

  @HasMany(() => Answer)
  answers: Answer[];
}

export default Question;
