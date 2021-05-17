import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Payment } from '../entities/payments.entity';
import { Product } from '../products/products.entity';

@Entity()
export class Order extends Payment {
  // Everypay token
  @Column()
  token: string;

  // TODO: Relation with Coupon
  // @Column()
  // coupon: string;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];

  @Column()
  county: string;

  @Column()
  shippingAddress: string;

  @Column()
  billingAddress: string;
}
