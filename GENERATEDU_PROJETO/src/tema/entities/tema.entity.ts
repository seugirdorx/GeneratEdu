import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_tema"})
export class Tema {

    @PrimaryGeneratedColumn ()
    id: number

    @IsNotEmpty ()
    @MaxLength (255)
    @Column ({length: 255, nullable: false})
    educacao: string

    @IsNotEmpty ()
    @MaxLength (255)
    @Column ({length: 255, nullable: false})
    conteudo: string
}