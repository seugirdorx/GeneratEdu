import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_postagem" })
export class Postagem {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 120, nullable: false})
    titulo: string;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    conteudo: string;

    @Column()
    data_hora: Date;


    @OneToMany(() => Postagem, (Postagem) => Postagem.tema, {
        onDelete: "CASCADE"
    })
    postagem: Postagem

}