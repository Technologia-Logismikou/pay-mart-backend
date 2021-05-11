import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';

@Entity()
export class Product extends BaseEntity {
  // TODO: Relation with Store
  @Column()
  store: string;

  // TODO: Relation with Category
  @Column()
  category: string;

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
