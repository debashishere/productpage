import { Column, Entity, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { OrderDetails } from "./order.details.entity";
import { Product } from "./product.entity";

@Entity({ name: 'order_item' })
export class OrderItems extends BaseEntity {

  @ManyToOne(() => OrderDetails, orderdetails => orderdetails.id)
  orderIds: OrderDetails

  @OneToOne(() => Product, product => product.id)
  productId: Product;

  @Column({ type: 'int' })
  quantity: number
}