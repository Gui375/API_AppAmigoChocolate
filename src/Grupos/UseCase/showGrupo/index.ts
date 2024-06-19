import { GruposRepository } from 'src/Grupos/repositories/GruposRepository'
import { showGrupoUseCase } from './showGrupoUseCase'
import { ShowGrupoController } from './showGrupoController'

const showGrupoRepository = GruposRepository.getInstance() //Estamos apenas chamando uma instancia que já existe, todos os métodos da controler que usa role, vão instanciar RoleRepositor

const ShowGrupoUseCase = new showGrupoUseCase(showGrupoRepository)

// eslint-disable-next-line prettier/prettier
export const showGrupoController = new ShowGrupoController(ShowGrupoUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
