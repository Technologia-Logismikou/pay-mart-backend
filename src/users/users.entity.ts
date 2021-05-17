import { Entity, TableInheritance, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { Payment } from '../entities/payments.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class User extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  // @OneToMany(() => Payment, (payment) => payment.seller, {
  //   onDelete: 'CASCADE',
  // })
  // payments: Payment[];

  // TODO: Possibly add status property as enum
}
