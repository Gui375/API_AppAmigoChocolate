//Validação das regras antes de ir pra controller
import { Usuario } from 'src/usuarios/http/routes/entities/Usuario'
import { AppError } from '@shared/Errors/AppError'
import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'

type ShowUsuarioParamns = {
  id: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class showUsuarioUseCase {
  constructor(private usuarioRepository: UsuariosRepository) {}

  async execute({ id }: ShowUsuarioParamns): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findById(id)

    if (!usuario) {
      throw new AppError('Role not found', 404)
    }
    return usuario
  }
}
