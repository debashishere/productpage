import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";

@Entity({ name: 'shopping_session' })
export class ShoppingSession extends BaseEntity {

  @ManyToOne(type => User)
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  userId: number;

  @Column({ type: 'int' })
  total: number;
}