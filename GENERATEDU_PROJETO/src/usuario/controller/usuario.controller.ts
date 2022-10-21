import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../service/usuario.service";

@Controller('/usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
        return this.usuarioService.findById(id);
    }

    @Get('/descricao/:usuario')
    @HttpCode(HttpStatus.OK)
    findByEducacao(@Param('usuario') usuario: string): Promise<Usuario[]> {
        return this.usuarioService.findByUsuario(usuario);
    }

    @Get('/conteudo/:conteudo')
    @HttpCode(HttpStatus.OK)
    findByConteudo(@Param('conteudo') conteudo: string): Promise<Usuario[]> {
        return this.usuarioService.findByConteudo(conteudo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.create(usuario);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(usuario);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.usuarioService.delete(id);
    }
}
