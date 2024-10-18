import { Hospital } from "src/hospital/entities/hospital.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, TableForeignKey, UpdateDateColumn } from "typeorm";
// import { Hospital } from "./hospital.entity";

@Entity()
export class Insurance {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToMany(() => Hospital, (hospital) => hospital.id, {
        eager: false,
        lazy: false,
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        orphanedRowAction: 'delete',
    })
    @JoinColumn({
        name: 'hospital_id',
    })
    hospital: Hospital
    hospital_id:number

    @Column()
    name: string

    @Column()
    provider: string

    @Column()
    description: string

    @Column({ default: 0 })
    price: number

    @Column()
    cpt_code: string

    @Column()
    diseases_description: string

    @CreateDateColumn()
    create_at: string

    @UpdateDateColumn()
    update_at: string
}