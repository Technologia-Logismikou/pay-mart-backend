import { Entity, Column } from 'typeorm';
import { Payment } from '../entities/payments.entity';

@Entity()
export class Order extends Payment {
  // Everypay token
  @Column()
  token: string;

  // TODO: Relation with Coupon
  @Column()
  coupon: string;

  // TODO: Relation with Product
  @Column('varchar', { array: true })
  products: string[];

  // TODO: Relation with County
  @Column()
  county: string;

  @Column()
  shippingAddress: string;

  @Column()
  billingAddress: string;
}
