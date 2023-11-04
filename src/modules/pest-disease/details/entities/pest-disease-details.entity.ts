import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {PestDisease} from "../../entities/pest-disease.entity";

@Entity()
export class PestDiseaseDetails {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    category: string

    @Column()
    symptoms: string

    @Column()
    more_info: string

    @Column("text", {array: true})
    preventive_measure: string[]

    @Column()
    caused: string

    @Column("text", {array: true})
    image: string[]

    @OneToOne(() => PestDisease, (pestDisease) => pestDisease.id, {cascade: true})
    @JoinColumn({ name: "fk_pest_disease_id" })
    pest_disease: PestDisease
}