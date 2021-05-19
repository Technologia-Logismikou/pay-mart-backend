import {
  Entity,
  Tree,
  Column,
  TreeChildren,
  TreeParent,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { Store } from '../stores/stores.entity';
import { Product } from '../products/products.entity';

@Entity()
@Tree('materialized-path')
export class Category extends BaseEntity {
  @ManyToOne(() => Store, (store) => store.categories, { nullable: true })
  store: Store;

  @ManyToMany(() => Product, { nullable: true })
  @JoinTable()
  products: Product[];

  @Column({ nullable: true })
  name: string;

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;
}
