import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { Store } from '../stores/stores.entity';

@Entity()
export class Coupon extends BaseEntity {
  @ManyToOne(() => Store, (store) => store.coupons, { nullable: true })
  store: Store;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  amountOff: number;

  @Column({ nullable: true })
  percentOff: number;

  @Column({ nullable: true })
  timesRedeemed: number;

  @Column({ nullable: true })
  maxRedemptions: number;

  @Column({ nullable: true })
  expiration: Date;

  @Column({ default: true, nullable: true })
  active: boolean;
}
