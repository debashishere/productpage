import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: 'inventory' })
export class Inventory extends BaseEntity {
  @Column({ type: 'int' })
  quantity: number;
}