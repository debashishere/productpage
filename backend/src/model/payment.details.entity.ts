import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";


@Entity({ name: 'payment_details' })
export class PaymentDetails extends BaseEntity {

  @Column({ type: 'int' })
  amount: number

  @Column({ type: 'varchar', length: 200 })
  provider: string

  @Column({ type: 'varchar', length: 200 })
  status: string
}