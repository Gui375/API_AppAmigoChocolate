import { GruposRepository } from 'src/Grupos/repositories/GruposRepository'
import { CreateGruposUseCase } from './CreateGruposUseCase'
import { CreateGruposController } from './CreateGruposController'
import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'

const usuariosRepository = UsuariosRepository.getInstance()
const gruposRepository = GruposRepository.getInstance() //Estamos apenas chamando uma instancia que já existe

const createGruposUseCase = new CreateGruposUseCase(
  gruposRepository,
  usuariosRepository,
)

// eslint-disable-next-line prettier/prettier
export const createGruposController = new CreateGruposController(createGruposUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
