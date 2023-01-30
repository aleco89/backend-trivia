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
import User from "./user";

interface TriviasAnsweredAttributes {
  id: number;
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  userId: number;
  triviaId: number;
}
interface TriviasAnsweredCreationAttributes
  extends Optional<TriviasAnsweredAttributes, "id"> {}

@Table
class TriviasAnswered
  extends Model<TriviasAnsweredAttributes, TriviasAnsweredCreationAttributes>
  implements TriviasAnsweredAttributes
{
  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column
  score: number;

  @Column
  correctAnswers: number;

  @Column
  incorrectAnswers: number;

  @ForeignKey(() => User)
  @Column
  userId: number;
  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Trivia)
  @Column
  triviaId: number;
  @BelongsTo(() => Trivia)
  trivia: Trivia;
}

export default TriviasAnswered;
