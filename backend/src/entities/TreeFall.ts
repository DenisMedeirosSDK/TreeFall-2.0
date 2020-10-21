import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Image from './Image';

@Entity('treefalls')
export default class TreeFall {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  street: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  zipcode: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @OneToMany(() => Image, image => image.treeFall, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'treefall_id' })
  images: Image[];
}
