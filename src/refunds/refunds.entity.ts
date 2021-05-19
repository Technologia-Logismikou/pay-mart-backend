import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { Order } from '../orders/orders.entity';

@Entity()
export class Refund extends BaseEntity {
  // Everypay token
  @Column({ nullable: true })
  token: string;

  @OneToOne(() => Order, { nullable: true })
  @JoinColumn()
  order: Order;

  @Column({ nullable: true })
  fee: number;
}
