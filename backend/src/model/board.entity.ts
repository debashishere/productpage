// Board.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'Board' })
export class Board extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column()
  price: number;

  @Column({ type: 'varchar', length: 300 })
  size: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 300 })
  image: string;

}

