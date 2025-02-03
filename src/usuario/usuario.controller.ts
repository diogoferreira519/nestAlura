/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
@Controller('/usuarios')
export class UsuarioController {
  private usuarioRepository: UsuarioRepository = new UsuarioRepository();

  @Post()
  criaUsuario(@Body() dadosUsuario) {
    this.usuarioRepository.salvar(dadosUsuario);
  }

  @Get()
  listarTodos() {
    return this.usuarioRepository.listar();
  }
}
