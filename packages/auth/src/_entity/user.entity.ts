import {Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, CreateDateColumn,} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 255, nullable: false})
    firstName: string;

    @Column({length: 255, nullable: false})
    lastName: string;

    @Column({length: 255, nullable: false, unique: true})
    email: string;

    @Column({length: 255, nullable: false, select: false})
    password: string;

    @Column({length: 255, nullable: false, select: false})
    salt: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
