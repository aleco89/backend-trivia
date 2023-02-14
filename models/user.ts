"use strict";
import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import UsersAnswers from "./usersAnswers";

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
  usersAnswers?: UsersAnswers[];
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table({
  tableName: "users",
})
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
  @Column({
    allowNull: false,
  })
  firstName: string;
  @Column({
    allowNull: false,
  })
  lastName: string;
  @Column({
    allowNull: false,
  })
  email: string;
  @Column({
    allowNull: false,
  })
  password: string;
  @Column
  totalScore: number;
  @Column
  triviasSolved: number;
  @Column
  avatar: string;
  @Column
  admin: boolean;

  @HasMany(() => UsersAnswers, { onDelete: "cascade" })
  usersAnswers: UsersAnswers[];
}

export default User;
