//Validação das regras antes de ir pra controller
import { Usuario } from 'src/usuarios/http/routes/entities/Usuario'
import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'
import { AppError } from '@shared/Errors/AppError'

type CreateUsuarioDTO = {
  nome: string
  email: string
  senha: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class CreateUsuarioUseCase {
  constructor(private usuariosRepository: UsuariosRepository) {}

  async execute({ nome, email, senha }: CreateUsuarioDTO): Promise<Usuario> {
    const usuarioAreadyExists = await this.usuariosRepository.findByEmail(email)

    if (usuarioAreadyExists) {
      throw new AppError('Email em uso')
    }
    return this.usuariosRepository.create({ nome, email, senha })
  }
}
