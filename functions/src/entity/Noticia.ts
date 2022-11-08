import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToOne} from "typeorm";
import { Usuario } from "./Usuario";
import { Colonia } from "./Colonia";
@Entity()
export class Noticia extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;
    
    @Column()
    createdAt: Date;

    @BeforeInsert()
    addTimestamp() {
        this.createdAt = new Date();
    }

    @OneToOne(type => Usuario)
    usuario: Usuario;

    @OneToOne(type => Colonia)
    colonia: Colonia;
}