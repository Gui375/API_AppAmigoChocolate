import { CreateGruposUseCase } from './CreateGruposUseCase'
import { CreateGruposController } from './CreateGruposController'
import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'
import { NovoGruposRepository } from 'src/novoParticipante/repositories/GruposRepository'

const usuariosRepository = UsuariosRepository.getInstance()
const novoNoGrupo = NovoGruposRepository.getInstance() //Estamos apenas chamando uma instancia que já existe

const createGruposUseCase = new CreateGruposUseCase(
  novoNoGrupo,
  usuariosRepository,
)

// eslint-disable-next-line prettier/prettier
export const NewParticipanteGrupoController = new CreateGruposController(createGruposUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
