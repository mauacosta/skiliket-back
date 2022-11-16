import { BaseEntity, Entity, Column, PrimaryGeneratedColumn} from "typeorm";
//import { Usuario } from "./Usuario";
//import { Colonia } from "./Colonia";
@Entity()
export class Noticia extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    descripcion: string;

    @Column()
    correo: string;

    @Column()
    direccion: string;

    @Column()
    colonia: string;

    @Column()
    codigoPostal: string;

    @Column()
    tipoUsuario: string;

    @Column()
    fecha: string;

}