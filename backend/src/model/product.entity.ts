// Product.entity.ts
import { Entity, Column, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Catagory } from './product.catagory.entity';
import { Inventory } from './product.inventory.entity';

@Entity({ name: 'product' })
export class Product extends BaseEntity {
  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'varchar', length: 500 })
  desc: string;

  @Column({ type: 'varchar', length: 500 })
  SKU: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'varchar', length: 300 })
  image: string;

  @ManyToOne(() => Catagory, catagory => catagory.id)
  catagories: Catagory[]

  @OneToOne(() => Inventory, inventory => inventory.id)
  inventory: Inventory;
}

