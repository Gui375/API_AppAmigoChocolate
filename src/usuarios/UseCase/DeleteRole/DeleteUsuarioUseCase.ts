//Validação das regras antes de ir pra controller
import { AppError } from '@shared/Errors/AppError'
import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'

type DeleteUsuarioParamns = {
  id: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class deleteUsuarioUseCase {
  constructor(private usuarioRepository: UsuariosRepository) {}

  async execute({ id }: DeleteUsuarioParamns): Promise<void> {
    const usuario = await this.usuarioRepository.findById(id)

    if (!usuario) {
      throw new AppError('Usuario Id not found', 404)
    }
    await this.usuarioRepository.delete(usuario)
  }
}
