import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { Category } from '../categories/categories.entity';
import { Product } from '../products/products.entity';
import { ShippingZone } from '../shipping-zones/shipping-zones.entity';

@Entity()
export class Store extends BaseEntity {
  @OneToMany(() => Category, (category) => category.store, {
    onDelete: 'CASCADE',
  })
  categories: Category[];

  @OneToMany(() => Product, (product) => product.store, {
    onDelete: 'CASCADE',
  })
  products: Product[];

  @OneToMany(() => ShippingZone, (shippingZone) => shippingZone.store, {
    onDelete: 'CASCADE',
  })
  shippingZones: ShippingZone[];

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  logo: string;

  @Column()
  subdomain: string;

  @Column()
  website: string;
}
