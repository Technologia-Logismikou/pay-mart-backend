import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { Store } from '../stores/stores.entity';

@Entity()
export class ShippingZone extends BaseEntity {
  @ManyToOne(() => Store, (store) => store.shippingZones, { nullable: true })
  store: Store;

  @Column({ nullable: true })
  name: string;

  @Column('varchar', { array: true, nullable: true })
  counties: string[];

  @Column({ nullable: true })
  rate: number;
}
