//Validação das regras antes de ir pra controller
import { AppError } from '@shared/Errors/AppError'
import { GruposRepository } from 'src/Grupos/repositories/GruposRepository'

type DeleteGrupoParamns = {
  id: string
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class deleteGrupoUseCase {
  constructor(private grupoRepository: GruposRepository) {}

  async execute({ id }: DeleteGrupoParamns): Promise<void> {
    const grupo = await this.grupoRepository.findById(id)

    if (!grupo) {
      throw new AppError('grupo Id not found', 404)
    }
    await this.grupoRepository.delete(grupo)
  }
}
