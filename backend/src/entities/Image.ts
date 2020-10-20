import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import TreeFall from './TreeFall';

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => TreeFall, treeFall => treeFall.images)
  @JoinColumn({ name: 'treefall_id' })
  treeFall: TreeFall;
}
