import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { Payment } from '../entities/payments.entity';
import { Order } from '../orders/orders.entity';

@Entity()
export class Refund extends Payment {
  // Everypay token
  @Column()
  token: string;

  @OneToOne(() => Order)
  @JoinColumn()
  order: Order;

  @Column()
  fee: number;
}
