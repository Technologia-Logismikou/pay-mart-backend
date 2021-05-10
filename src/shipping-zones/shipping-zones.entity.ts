import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';

@Entity()
export class ShippingZone extends BaseEntity {
  // TODO: Relation with Store
  @Column()
  store: string;

  @Column()
  name: string;

  @Column('varchar', { array: true })
  counties: string[];

  @Column()
  rate: number;
}
