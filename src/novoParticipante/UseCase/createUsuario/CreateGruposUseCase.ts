//Validação das regras antes de ir pra controller
import { AppError } from '@shared/Errors/AppError'
import { GruposRepository } from 'src/Grupos/repositories/GruposRepository'
import { NovoNoParticipante } from 'src/novoParticipante/http/routes/entities/Grupo'
import { NovoGruposRepository } from 'src/novoParticipante/repositories/novoParticipanteRepository'
import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'

type CreateGrupoDTO = {
  id_grupo: string
  id_usuario: string
  ADM: boolean
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class CreateGruposUseCase {
  constructor(
    private novoParticipanteRepository: NovoGruposRepository,
    private usuarioRepository: UsuariosRepository,
    private grupoRepository: GruposRepository,
  ) {}
  async execute({
    id_grupo,
    id_usuario,
    ADM,
  }: CreateGrupoDTO): Promise<NovoNoParticipante> {
    // eslint-disable-next-line prettier/prettier
    const ParticipanteExiste = await this.usuarioRepository.findById(id_usuario)
    if (!ParticipanteExiste) {
      //Caso seja nulo essa condição ele retorna err, ou seja, caso não encontre nada
      throw new AppError('participanteID not found!', 404)
    }
    const GrupoExiste = await this.grupoRepository.findById(id_grupo)
    if (!GrupoExiste) {
      //Caso seja nulo essa condição ele retorna err, ou seja, caso não encontre nada
      throw new AppError('GrupoId not found!', 404)
    }
    const usuarioExisteNoGrupo =
      await this.novoParticipanteRepository.findByUserAndGroup(
        id_usuario,
        id_grupo,
      )
    if (usuarioExisteNoGrupo) {
      throw new AppError('Usuario is already part of this Grupo!', 400)
    }

    return this.novoParticipanteRepository.create({
      id_grupo,
      id_usuario,
      ADM,
    })
  }
}
