import { Entity, Tree, Column, TreeChildren, TreeParent } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';

@Entity()
@Tree('materialized-path')
export class Category extends BaseEntity {
  // TODO: Relation with Store
  @Column()
  store: string;

  @Column()
  name: string;

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;
}
