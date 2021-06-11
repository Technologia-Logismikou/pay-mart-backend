import { Entity, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { Store } from '../stores/stores.entity';
import { Order } from '../orders/orders.entity';

@Entity()
export class Seller extends BaseEntity {
  /**
   * TODO:
   * - Test the unique functionality
   * - Add name property
   */

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  // Everypay token
  @Column({ nullable: true })
  token: string;

  @Column({ nullable: true })
  phone: string;

  @OneToMany(() => Order, (order) => order.seller, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  orders: Order[];
}
