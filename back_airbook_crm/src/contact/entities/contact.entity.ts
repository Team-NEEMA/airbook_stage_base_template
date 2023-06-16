import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { AccountEntity } from '../../account/entity/account.entity';

@Entity('Contact')
export class ContactEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column({ nullable: true })
  firstname: string;
  @Column()
  email: string;
  @Column({ default: 'no account' })
  account: string;
  @Column({ default: 'Individual' })
  categorie: string;
  // @ManyToMany(() => AccountEntity, (account) => account.contacts, {
  //   cascade: true,
  // })
  // @JoinTable()
  // accounts: AccountEntity[];
}
