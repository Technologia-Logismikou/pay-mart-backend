import { Entity, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { Category } from '../categories/categories.entity';
import { Product } from '../products/products.entity';
import { ShippingZone } from '../shipping-zones/shipping-zones.entity';
import { Coupon } from '../coupons/coupons.entity';
import { Seller } from '../sellers/sellers.entity';

@Entity()
export class Store extends BaseEntity {
  @OneToMany(() => Category, (category) => category.store, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  categories: Category[];

  @OneToMany(() => Product, (product) => product.store, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  products: Product[];

  @OneToMany(() => ShippingZone, (shippingZone) => shippingZone.store, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  shippingZones: ShippingZone[];

  @OneToMany(() => Coupon, (coupon) => coupon.store, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  coupons: Coupon[];

  @OneToOne(() => Seller, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn()
  seller: Seller;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  logo: string;

  @Column({ nullable: true })
  subdomain: string;

  @Column({ nullable: true })
  website: string;
}
