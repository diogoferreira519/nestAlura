export class UsuarioRepository {
  private usuarios: any[] = [];

  salvar(usuario: any) {
    this.usuarios.push(usuario);
  }

  listar() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.usuarios;
  }
}
