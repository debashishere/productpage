import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm"
import { BaseEntity } from "./base.entity";
import { Product } from "./product.entity";
import { ShoppingSession } from "./shopping-session.entity";

@Entity({ name: 'card_item' })
export class CardItem extends BaseEntity {

  @ManyToOne(type => ShoppingSession)
  @JoinColumn({ name: 'shopping_session', referencedColumnName: 'id' })
  seesionId: number;

  @OneToOne(() => Product, product => product.id)
  productId: Product;

  @Column({ type: 'int' })
  quantity: number;

}