// Board.entity.ts
import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Board } from './board.entity';
import { User } from './user.entity';

@Entity({ name: 'order' })
export class Order extends BaseEntity {

  @ManyToOne(type => User, user => user.orders)
  users: User;

  @Column({ type: 'varchar', length: 300 })
  board: string;

  @ManyToMany(() => Board)
  @JoinTable()
  categories: Board[];

  @Column()
  price: number;
}

