import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Image from './Image';

@Entity('TreeFalls')
export default class TreeFall {
  @PrimaryGeneratedColumn('increment')
  id: number;

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

  @ManyToOne(() => Image, image => image.treeFall, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'treefall_id' })
  images: Image[];
}
