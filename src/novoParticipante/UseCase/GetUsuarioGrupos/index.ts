import { NovoGruposRepository } from 'src/novoParticipante/repositories/novoParticipanteRepository'
import { GruposRepository } from 'src/Grupos/repositories/GruposRepository'
import { showUsuarioGrupoUseCase } from './showUsuariosGruposUseCase'
import { ShowUsuarioGrupoController } from './showUsuariosGruposController'

const gruposRepository = GruposRepository.getInstance()
const novoParticipante = NovoGruposRepository.getInstance() //Estamos apenas chamando uma instancia que já existe

const ShowUsuarioUseCase = new showUsuarioGrupoUseCase(
  novoParticipante,
  gruposRepository,
)

// eslint-disable-next-line prettier/prettier
export const ShowUsuariosInGroupsController = new ShowUsuarioGrupoController(ShowUsuarioUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
