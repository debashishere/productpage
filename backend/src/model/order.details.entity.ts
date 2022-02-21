import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { PaymentDetails } from "./payment.details.entity";
import { User } from "./user.entity";


@Entity({ name: 'order_details' })
export class OrderDetails extends BaseEntity {
  @OneToOne(() => User, user => user.id)
  userId: User

  @Column({ type: 'int' })
  total: number

  @OneToMany(() => PaymentDetails, paymentDetails => paymentDetails.id)
  paymentIds: PaymentDetails[]
}