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
    const roleAreadyExists = await this.usuariosRepository.findByEmail(email)

    if (roleAreadyExists) {
      throw new AppError('Usuário ID already exists')
    }
    return this.usuariosRepository.create({ nome, email, senha })
  }
}
