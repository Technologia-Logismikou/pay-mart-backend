import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { Store } from '../stores/stores.entity';

@Entity()
export class Product extends BaseEntity {
  @ManyToOne(() => Store, (store) => store.products)
  store: Store;

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
