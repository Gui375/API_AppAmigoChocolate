//Validação das regras antes de ir pra controller
import { AppError } from '@shared/Errors/AppError'
import { Grupo } from 'src/Grupos/http/routes/entities/Grupo'
import { GruposRepository } from 'src/Grupos/repositories/GruposRepository'

type UpdateGrupoDTO = {
  id: string
  id_grupo: string
  nome: string
  quantidadePessoas: number
  valor: number
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class UpdateGrupoUseCase {
  constructor(private grupoRepository: GruposRepository) {}

  async execute({
    id,
    id_grupo,
    nome,
    quantidadePessoas,
    valor,
  }: UpdateGrupoDTO): Promise<Grupo> {
    const grupo = await this.grupoRepository.findById(id)
    if (!grupo) {
      throw new AppError('Usuario not found', 404)
    }
    grupo.id_grupo = id_grupo
    grupo.nome = nome
    grupo.quantidadePessoas = quantidadePessoas
    grupo.valor = valor
    return this.grupoRepository.save(grupo)
  }
}
