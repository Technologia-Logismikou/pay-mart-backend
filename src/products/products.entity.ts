import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { Store } from '../stores/stores.entity';

@Entity()
export class Product extends BaseEntity {
  @ManyToOne(() => Store, (store) => store.products, { nullable: true })
  store: Store;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  price: number;

  @Column('varchar', { array: true, nullable: true })
  photos: string[];

  @Column({ default: true, nullable: true })
  public: boolean;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  slug: string;
}
