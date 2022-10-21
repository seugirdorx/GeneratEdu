import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { DeleteResult, ILike, Repository } from "typeorm"
import { Usuario } from "../entities/usuario.entity"

@Injectable()
export class UsuarioService{
    UsuarioRepository: any
    constructor(
    ){}

    async findAll(): Promise<Usuario[]> {
        return await this.UsuarioRepository.find()
    }

    async findById(id: number): Promise<Usuario> {
        
        let usuario = await this.UsuarioRepository.findOne({
            where: {
                id
            }
        })

        if (!usuario)
        throw new HttpException ('Usuário não encontrado', HttpStatus.NOT_FOUND)
        return usuario
    }

    async findByUsuario(usuario: string): Promise<Usuario[]> {
        return await this.UsuarioRepository.find({
            where: {
                usuario: ILike(`%${usuario}%`)
            }
        })
    }
    
    async findByConteudo(conteudo: string): Promise<Usuario[]> {
        return await this.UsuarioRepository.find({
            where: {
                educacao: ILike(`%${conteudo}%`)
            }
        })    
    }

    async create (usuario: Usuario): Promise<Usuario> {
        return await this.UsuarioRepository.save(usuario)
    }

    async update (usuario: Usuario): Promise<Usuario> {
        let buscarUsuario = await this.findById(usuario.id)

        if (!buscarUsuario || !usuario.id)
        throw new HttpException ('Usuário não existe', HttpStatus.NOT_FOUND)
        return await this.UsuarioRepository.save(usuario)
    }

    async delete (id:number): Promise<DeleteResult> {
        let buscarUsuario = await this.findById(id)

        if (!buscarUsuario)
        throw new HttpException ('Usuário não encontrado', HttpStatus.NOT_FOUND)
        return await this.UsuarioRepository.delete(id)
    }


}