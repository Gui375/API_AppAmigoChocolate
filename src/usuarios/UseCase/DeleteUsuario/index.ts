import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'
import { deleteUsuarioUseCase } from './DeleteUsuarioUseCase'
import { deleteUsuarioController } from './DeleteUsuarioController'

const deleteRepository = UsuariosRepository.getInstance() //Estamos apenas chamando uma instancia que já existe, todos os métodos da controler que usa role, vão instanciar RoleRepositor

const DeleteUsuarioUseCase = new deleteUsuarioUseCase(deleteRepository)

// eslint-disable-next-line prettier/prettier
export const DeleteUsuarioController = new deleteUsuarioController(DeleteUsuarioUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
