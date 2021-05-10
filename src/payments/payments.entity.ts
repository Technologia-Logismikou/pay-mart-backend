import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../entity/entity';

@Entity()
export abstract class Payment extends BaseEntity {
  // TODO: Relation with User
  @Column()
  from: string;

  // TODO: Relation with User
  @Column()
  to: string;

  @Column()
  amount: number;
}
