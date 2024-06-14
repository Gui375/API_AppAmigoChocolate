import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'
import { showUsuarioUseCase } from './showRoleUseCase'
import { showUsuarioController } from './showRoleController'

const showUsuarioRepository = UsuariosRepository.getInstance() //Estamos apenas chamando uma instancia que já existe, todos os métodos da controler que usa role, vão instanciar RoleRepositor

const ShowUsuarioUseCase = new showUsuarioUseCase(showUsuarioRepository)

// eslint-disable-next-line prettier/prettier
export const showUsuariosController = new showUsuarioController(ShowUsuarioUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
