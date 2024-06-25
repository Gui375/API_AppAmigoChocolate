//Validação das regras antes de ir pra controller
import { AppError } from '@shared/Errors/AppError'
import { GruposRepository } from 'src/Grupos/repositories/GruposRepository'
import { NovoGruposRepository } from 'src/novoParticipante/repositories/novoParticipanteRepository'
import { NovoNoParticipante } from 'src/novoParticipante/http/routes/entities/Grupo'

type ShowUsuarioGrupoParamns = {
  id: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class showUsuarioGrupoUseCase {
  constructor(
    private novoParticipanteRepository: NovoGruposRepository,
    private grupoRepository: GruposRepository,
  ) {}

  async execute({
    // eslint-disable-next-line prettier/prettier
    id
  }: ShowUsuarioGrupoParamns): Promise<NovoNoParticipante[]> {
    const grupo = await this.grupoRepository.findById(id)
    if (!grupo) {
      throw new AppError('grupo not found', 404)
    }
    return await this.novoParticipanteRepository.findUsersInGroup(id)
  }
}
