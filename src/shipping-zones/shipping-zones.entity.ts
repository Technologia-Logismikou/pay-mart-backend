import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { Store } from '../stores/stores.entity';

@Entity()
export class ShippingZone extends BaseEntity {
  @ManyToOne(() => Store, (store) => store.categories)
  store: Store;

  @Column()
  name: string;

  @Column('varchar', { array: true })
  counties: string[];

  @Column()
  rate: number;
}
