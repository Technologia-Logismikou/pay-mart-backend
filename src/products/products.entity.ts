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

  @Column('float4', { nullable: true })
  price: number;

  // TODO: Change this to 'images'
  @Column('varchar', { array: true, nullable: true })
  photos: string[];

  @Column({ default: true, nullable: true })
  public: boolean;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  slug: string;
}
