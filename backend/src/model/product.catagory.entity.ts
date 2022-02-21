import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: 'catagory' })
export class Catagory extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  title: string;
}