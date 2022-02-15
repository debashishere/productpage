// Board.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'order' })
export class Order extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  user: string;

  @Column({ type: 'varchar', length: 300 })
  board: string;

  @Column()
  price: number;
}

