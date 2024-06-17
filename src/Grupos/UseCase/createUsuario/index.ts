import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'
import { CreateUsuarioUseCase } from './CreateUsuarioUseCase'
import { CreateUsuarioController } from './CreateUsuarioController'

const usuariosRepository = UsuariosRepository.getInstance() //Estamos apenas chamando uma instancia que já existe

const createUsuarioUseCase = new CreateUsuarioUseCase(usuariosRepository)

// eslint-disable-next-line prettier/prettier
export const createUsuariosController = new CreateUsuarioController(createUsuarioUseCase)
//Essas ligações é responsavel Por ligar cada classe na outra
