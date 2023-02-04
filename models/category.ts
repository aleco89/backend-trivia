"use strict";
import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import Trivia from "./trivia";

interface CategoryAttributes {
  id: number;
  name: string;
  trivias?: Trivia[];
}
interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, "id"> {}

@Table({
  tableName: "categories",
})
class Category
  extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes
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
  name: string;

  @HasMany(() => Trivia)
  trivias: Trivia[];
}

export default Category;
