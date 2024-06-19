import { deleteGrupoController } from './DeleteUsuarioController'
import { deleteGrupoUseCase } from './DeleteUsuarioUseCase'
import { GruposRepository } from 'src/Grupos/repositories/GruposRepository'

const deleteRepository = GruposRepository.getInstance() //Estamos apenas chamando uma instancia que já existe, todos os métodos da controler que usa role, vão instanciar RoleRepositor

const DeleteGrupoUseCase = new deleteGrupoUseCase(deleteRepository)

// eslint-disable-next-line prettier/prettier
export const DeleteGrupoController = new deleteGrupoController(DeleteGrupoUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
