import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // TODO: Relation with Store
  @Column()
  store: string;

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
