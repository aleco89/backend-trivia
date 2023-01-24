"use strict";
import { Optional } from "sequelize";
import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

interface TriviaAttributes {
  id: number;
  title: string;
  description: string;
  questionQuantity: number;
  CategoryId: number;
}
interface TriviaCreationAttributes extends Optional<TriviaAttributes, "id"> {}

@Table
class Trivia
  extends Model<TriviaAttributes, TriviaCreationAttributes>
  implements TriviaAttributes
{
  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true,
  })
  id: number;
  @Column
  title: string;
  @Column
  description: string;
  @Column
  questionQuantity: number;
  @Column
  CategoryId: number;
}

export default Trivia;
