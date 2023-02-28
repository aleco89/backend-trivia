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

interface QuestionAttributes {
  id: number;
  question: string;
  triviaId: number;
  answers?: Answer[];
}
interface QuestionCreationAttributes
  extends Optional<QuestionAttributes, "id"> {}

@Table({
  tableName: "questions",
})
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

  @Column({
    allowNull: false,
  })
  question: string;

  @ForeignKey(() => Trivia)
  @Column
  triviaId: number;
  @BelongsTo(() => Trivia)
  trivia: Trivia;

  @HasMany(() => Answer, { onDelete: "cascade", onUpdate: "cascade" })
  answers: Answer[];
}

export default Question;
