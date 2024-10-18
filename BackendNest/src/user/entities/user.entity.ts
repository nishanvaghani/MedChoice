import { Column, CreateDateColumn, Entity, IsNull, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    username:string

    @Column()
    first_name:string

    @Column()
    last_name:string

    @Column([!IsNull])
    gmail:string

    @Column()
    profile_ur:string

    @Column()
    contact_us:string

    @CreateDateColumn()
    create_at:string

    @UpdateDateColumn()
    update_at:string
}