//Validação das regras antes de ir pra controller
import { AppError } from '@shared/Errors/AppError'
import { Usuario } from 'src/usuarios/http/routes/entities/Usuario'
import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'

type UpdateUsuarioDTO = {
  id: string
  nome: string
  email: string
  senha: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class UpdateUsuarioUseCase {
  constructor(private usuariosRepository: UsuariosRepository) {}

  async execute({
    id,
    nome,
    email,
    senha,
  }: UpdateUsuarioDTO): Promise<Usuario> {
    const usuario = await this.usuariosRepository.findById(id)
    if (!usuario) {
      throw new AppError('Usuario not found', 404)
    }
    const UsuarioWithSameEmail = await this.usuariosRepository.findByName(email)
    if (UsuarioWithSameEmail && usuario.email !== UsuarioWithSameEmail.email) {
      throw new AppError('Usuario id not informed or already in use')
    }
    usuario.nome = nome
    usuario.email = email
    usuario.senha = senha
    return this.usuariosRepository.save(usuario)
  }
}
