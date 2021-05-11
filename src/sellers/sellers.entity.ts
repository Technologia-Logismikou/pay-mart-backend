import { ChildEntity, Column } from 'typeorm';
import { User } from '../users/users.entity';

@ChildEntity()
export class Seller extends User {
  // Everypay token
  @Column()
  token: string;

  // TODO: Relation with Store
  @Column()
  store: string;

  @Column()
  phone: string;
}
