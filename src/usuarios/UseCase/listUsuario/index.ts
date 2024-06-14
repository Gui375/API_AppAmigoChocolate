import { UsuariosRepository } from 'src/usuarios/repositories/UsuariosRepository'
import { ListUsuariosUseCase } from './listRolesUseCase'
import { ListUsuariosController } from './listRolesController'

const usuariosRepository = UsuariosRepository.getInstance() //Estamos apenas chamando uma instancia que já existe
const listUsuariosUseCase = new ListUsuariosUseCase(usuariosRepository)
// eslint-disable-next-line prettier/prettier
export const listUsuariosController = new ListUsuariosController(listUsuariosUseCase)
