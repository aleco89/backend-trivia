"use strict";
import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import TriviasAnswered from "./triviasanswered";

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  totalScore: number;
  triviasSolved: number;
  avatar: string;
  admin: boolean;
  triviasAnswered?: TriviasAnswered[];
  //triviaAnswered:TriviaAnswerCreationAtributes
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true,
  })
  id: number;
  @Column
  firstName: string;
  @Column
  lastName: string;
  @Column
  email: string;
  @Column
  password: string;
  @Column
  totalScore: number;
  @Column
  triviasSolved: number;
  @Column
  avatar: string;
  @Column
  admin: boolean;

  @HasMany(() => TriviasAnswered)
  triviasAnswered: TriviasAnswered[];
}

export default User;
