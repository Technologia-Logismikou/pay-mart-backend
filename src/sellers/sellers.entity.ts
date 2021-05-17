import { ChildEntity, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from '../users/users.entity';
import { Store } from '../stores/stores.entity';
import { Payment } from '../entities/payments.entity';

@ChildEntity()
export class Seller extends User {
  // Everypay token
  @Column()
  token: string;

  @OneToOne(() => Store)
  @JoinColumn()
  store: Store;

  @Column()
  phone: string;
}
