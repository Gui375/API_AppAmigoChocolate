import { GruposRepository } from 'src/Grupos/repositories/GruposRepository'
import { UpdateGrupoUseCase } from './UpdateGrupoUseCase'
import { UpdateGrupoController } from './UpdateGrupoController'

const updateRepository = GruposRepository.getInstance() //Estamos apenas chamando uma instancia que já existe, todos os métodos da controler que usa role, vão instanciar RoleRepositor

const updateGrupoUseCase = new UpdateGrupoUseCase(updateRepository)
/* eslint-disable prettier/prettier */
export const updateGrupoController = new UpdateGrupoController(updateGrupoUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
