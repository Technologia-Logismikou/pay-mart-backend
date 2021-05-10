import { Entity, Column } from 'typeorm';
import { Payment } from '../entities/payments.entity';

@Entity()
export class Refund extends Payment {
  // Everypay token
  @Column()
  token: string;

  // TODO: Relation with Order
  @Column()
  order: string;

  @Column()
  fee: number;
}
