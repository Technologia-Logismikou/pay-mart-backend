import { Entity, TableInheritance, Column } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class User extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  // TODO: Possibly add status property as enum
}
