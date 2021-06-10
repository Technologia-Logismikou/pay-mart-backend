import { Entity, Column, ManyToMany, ManyToOne, JoinTable } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { Product } from '../products/products.entity';
import { Seller } from '../sellers/sellers.entity';
import { Coupon } from '../coupons/coupons.entity';

@Entity()
export class Order extends BaseEntity {
  // TODO: Possible relation with Customer, just email for now
  @Column({ nullable: true })
  customer: string;

  @Column('float4', { nullable: true })
  amount: number;

  // Everypay token
  @Column({ nullable: true })
  token: string;

  @ManyToOne(() => Seller, (seller) => seller.orders, { nullable: true })
  seller: Seller;

  @ManyToMany(() => Product, { nullable: true })
  @JoinTable()
  products: Product[];

  @ManyToMany(() => Coupon, { nullable: true })
  @JoinTable()
  coupons: Coupon[];

  @Column({ nullable: true })
  county: string;

  @Column({ nullable: true })
  shippingAddress: string;

  @Column({ nullable: true })
  billingAddress: string;
}
