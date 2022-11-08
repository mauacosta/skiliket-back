
import { BaseEntity, Entity, Column, PrimaryColumn, BeforeInsert, OneToOne } from "typeorm";
import { Colonia } from "./Colonia";

@Entity()
export class Usuario extends BaseEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    nombre: string;

    @Column()
    apellidos: string;

    @Column()
    email: string;

    @Column()
    tipo: string;

    @Column()
    direccion: string;

    @Column()
    codigo_postal: string;

    @Column()
    createdAt: Date;

    @BeforeInsert()
    addTimestamp() {
        this.createdAt = new Date();
    }

    @OneToOne(type => Colonia)
    colonia: Colonia;

}
