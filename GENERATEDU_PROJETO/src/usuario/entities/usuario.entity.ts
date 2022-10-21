import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_users'})
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 120, nullable: false})
    name: string;

    @IsNotEmpty()
    @Column({length: 120, nullable: false})
    email: string;

    @IsNotEmpty()
    @Column({length: 120, nullable: false})
    password: string;

    @Column({length: 255, nullable: true})
    photo: string;

    @ManyToOne(() => Usuario, (Usuario) => Usuario.postagem)
    usuario: Usuario
}