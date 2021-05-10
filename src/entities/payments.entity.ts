import { Column } from 'typeorm';
import { BaseEntity } from './base-entity';

export abstract class Payment extends BaseEntity {
  // TODO: Relation with Customer
  @Column()
  customer: string;

  // TODO: Relation with Seller
  @Column()
  seller: string;

  @Column()
  amount: number;
}
