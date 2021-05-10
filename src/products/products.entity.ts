import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../entity/entity';

@Entity()
export class Product extends BaseEntity {
  // TODO: Relation with Store
  @Column()
  store: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column('varchar', { array: true })
  photos: string[];

  @Column({ default: true })
  public: boolean;

  @Column()
  url: string;

  @Column()
  slug: string;
}