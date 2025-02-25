import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity ({ name: "tb_postagem" })
export class Postagem {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({length: 255, nullable: false})
    titulo: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({length: 255, nullable: false})
    conteudo: string

    @ApiProperty()
    @Column({length: 255, nullable: false})
    data_hora: string

    @ApiProperty()
    @Column({nullable: true})
    curtida: number

    @ApiProperty({ type: () => Tema })
    @ManyToOne(() => Tema, (tema) => tema.postagem,{
        onDelete: "CASCADE"
    })
    tema: Tema

    @ApiProperty({ type: () => Usuario })
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem,{
        onDelete: "CASCADE"
    })
    usuario: Usuario
}