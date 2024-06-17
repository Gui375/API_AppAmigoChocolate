import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'
import { ListUsuariosUseCase } from './listUsuariosUseCase'
import { ListUsuariosController } from './listUsuariosController'

const usuariosRepository = UsuariosRepository.getInstance() //Estamos apenas chamando uma instancia que já existe
const listUsuariosUseCase = new ListUsuariosUseCase(usuariosRepository)
// eslint-disable-next-line prettier/prettier
export const listUsuariosController = new ListUsuariosController(listUsuariosUseCase)
