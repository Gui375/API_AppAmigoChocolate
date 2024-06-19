//Validação das regras antes de ir pra controller
import { AppError } from '@shared/Errors/AppError'
import { Grupo } from 'src/Grupos/http/routes/entities/Grupo'
import { GruposRepository } from 'src/Grupos/repositories/GruposRepository'

type ShowGrupoParamns = {
  id: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class showGrupoUseCase {
  constructor(private grupoRepository: GruposRepository) {}

  async execute({ id }: ShowGrupoParamns): Promise<Grupo> {
    const grupo = await this.grupoRepository.findById(id)

    if (!grupo) {
      throw new AppError('Grupo not found', 404)
    }
    return grupo
  }
}
