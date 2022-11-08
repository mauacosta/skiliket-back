import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from "typeorm";

@Entity()
export class Colonia extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    
    @Column()
    createdAt: Date;

    @BeforeInsert()
    addTimestamp() {
        this.createdAt = new Date();
    }

}