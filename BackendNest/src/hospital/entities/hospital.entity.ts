import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Hospital {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    address:string

    @Column()
    zipcode:number

    @Column()
    contact_us:string

    @UpdateDateColumn()
    create_at:string
}