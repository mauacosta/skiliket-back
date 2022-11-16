import { BaseEntity, Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Queja extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    naturaleza: string;

    @Column()
    descripcion: string;

    @Column()
    correo: string;

    @Column()
    fecha: string;

    @Column()
    tipoUsuario: string;
}