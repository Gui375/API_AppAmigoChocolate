import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'
import { ValidaNomeUseCase } from './showValidaNomeUseCase'
import { ValidaNomeController } from './showValidaNomeController'

const showUsuarioRepository = UsuariosRepository.getInstance() //Estamos apenas chamando uma instancia que já existe, todos os métodos da controler que usa role, vão instanciar RoleRepositor

const ShowUsuarioUseCase = new ValidaNomeUseCase(showUsuarioRepository)

// eslint-disable-next-line prettier/prettier
export const ShowValidaNomeController = new ValidaNomeController(ShowUsuarioUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
