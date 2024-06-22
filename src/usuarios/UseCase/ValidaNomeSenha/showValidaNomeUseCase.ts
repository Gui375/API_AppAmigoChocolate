//Validação das regras antes de ir pra controller
import { Usuario } from 'src/usuarios/http/routes/entities/Usuario'
import { AppError } from '@shared/Errors/AppError'
import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'

type ValidaNomeParamns = {
  nome: string
  senha: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class ValidaNomeUseCase {
  constructor(private usuarioRepository: UsuariosRepository) {}

  async execute({ nome, senha }: ValidaNomeParamns): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findByName(nome)
    const validaSenha = await this.usuarioRepository.ValidaSenha(nome, senha)
    if (!usuario) {
      throw new AppError('Usuario not found', 404)
    }
    if (!validaSenha) {
      throw new AppError('Senha invalida', 404)
    }
    return usuario
  }
}
