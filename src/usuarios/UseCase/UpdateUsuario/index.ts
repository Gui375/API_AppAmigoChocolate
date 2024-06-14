import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'
import { UpdateUsuarioUseCase } from './UpdateRoleUseCase'
import { UpdateUsuarioController } from './UpdateRoleController'

const updateRepository = UsuariosRepository.getInstance() //Estamos apenas chamando uma instancia que já existe, todos os métodos da controler que usa role, vão instanciar RoleRepositor

const updateUsuarioUseCase = new UpdateUsuarioUseCase(updateRepository)
/* eslint-disable prettier/prettier */
export const updateUsuarioController = new UpdateUsuarioController(updateUsuarioUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
