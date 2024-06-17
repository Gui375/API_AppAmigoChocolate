import { GruposRepository } from 'src/Grupos/repositories/GruposRepository'
import { ListGruposController } from './listRolesController'
import { ListGruposUseCase } from './listGruposUseCase'

const gruposRepository = GruposRepository.getInstance() //Estamos apenas chamando uma instancia que já existe
const listGruposUseCase = new ListGruposUseCase(gruposRepository)
// eslint-disable-next-line prettier/prettier
export const listGruposController = new ListGruposController(listGruposUseCase)
