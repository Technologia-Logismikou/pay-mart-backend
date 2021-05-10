import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../entity/entity';

@Entity()
export class Store extends BaseEntity {
  // TODO: Relation with Seller
  @Column()
  seller: string;

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
