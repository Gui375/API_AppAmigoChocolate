//Validação das regras antes de ir pra controller
import { AppError } from '@shared/Errors/AppError'
import { Grupo } from 'src/Grupos/http/routes/entities/Grupo'
import { GruposRepository } from 'src/Grupos/repositories/GruposRepository'
import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'

type CreateGrupoDTO = {
  id_grupo: string
  nome: string
  quantidadePessoas: number
  participanteID: string
  ADM: boolean
}
//Onde fica as regras e onde é gravado o novo objeto de fato
export class CreateGruposUseCase {
  constructor(
    private gruposRepository: GruposRepository,
    private usuarioRepository: UsuariosRepository,
  ) {}
  async execute({
    id_grupo,
    nome,
    quantidadePessoas,
    participanteID,
    ADM,
  }: CreateGrupoDTO): Promise<Grupo> {
    if (Number(quantidadePessoas) <= 0) {
      throw new AppError('quantidadePessoas is wrong!')
    }
    // eslint-disable-next-line prettier/prettier
    const ParticipanteExiste = await this.usuarioRepository.findById(participanteID)
    if (!ParticipanteExiste) {
      //Caso seja nulo essa condição ele retorna err, ou seja, caso não encontre nada
      throw new AppError('participanteID not found!', 404)
    }

    return this.gruposRepository.create({
      id_grupo,
      nome,
      quantidadePessoas,
      participanteID,
      ADM,
    })
  }
}
