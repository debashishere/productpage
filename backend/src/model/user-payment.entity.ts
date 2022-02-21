import { Entity, Column, ManyToOne, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity({ name: 'user_payment' })
export class UserPayment extends BaseEntity {

  @OneToOne(() => User, user => user.id)
  @JoinColumn()
  userId: User;

  @Column({ type: 'varchar', length: 300 })
  paymentType: string;

  @Column({ type: 'varchar', length: 300 })
  provider: string;

  @Column({ type: 'int' })
  accountNo: string;

  @Column({ type: Date })
  expiry: Date;

}

