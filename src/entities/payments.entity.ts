import { Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base-entity';
import { Seller } from '../sellers/sellers.entity';
import { User } from '../users/users.entity';

export abstract class Payment extends BaseEntity {
  // TODO: Relation with Customer
  @Column()
  customer: string;

  // @ManyToOne(() => User, (user) => user.payments)
  @Column()
  seller: string;

  @Column()
  amount: number;
}
