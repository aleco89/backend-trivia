"use strict";
import { Optional } from "sequelize";
import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  totalScore: number;
  triviasAnswered: number;
  avatar: string;
  admin: boolean;
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
  triviasAnswered: number;
  @Column
  avatar: string;
  @Column
  admin: boolean;
}

export default User;

/*
firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      score: DataTypes.NUMBER,
      trivias_answered: DataTypes.NUMBER,
      avatar: DataTypes.STRING,
*/
