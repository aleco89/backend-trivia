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
import Answer from "./answer";
import User from "./user";

interface UsersAnswersAttributes {
  id: number;
  userId: number;
  answerId: number;
}
interface UsersAnswersCreationAttributes
  extends Optional<UsersAnswersAttributes, "id"> {}

@Table({
  tableName: "usersResponses",
})
class UsersAnswers
  extends Model<UsersAnswersAttributes, UsersAnswersCreationAttributes>
  implements UsersAnswersAttributes
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
  score: number;

  @Column({
    allowNull: false,
  })
  correctAnswers: number;

  @Column({
    allowNull: false,
  })
  incorrectAnswers: number;

  @ForeignKey(() => User)
  @Column
  userId: number;
  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Answer)
  @Column
  answerId: number;
  @BelongsTo(() => Answer)
  answer: Answer;
}

export default UsersAnswers;