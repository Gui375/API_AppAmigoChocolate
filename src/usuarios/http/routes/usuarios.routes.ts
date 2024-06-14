import { Router } from 'express'
import { DeleteUsuarioController } from 'src/usuarios/UseCase/DeleteRole'
import { updateUsuarioController } from 'src/usuarios/UseCase/UpdateUsuario'
import { createUsuariosController } from 'src/usuarios/UseCase/createUsuario'
import { listUsuariosController } from 'src/usuarios/UseCase/listUsuario'
import { showUsuariosController } from 'src/usuarios/UseCase/showUsuario'

const usuariosRoutes = Router()

usuariosRoutes.post('/', (request, response) => {
  return createUsuariosController.handle(request, response)
})

usuariosRoutes.get('/', (request, response) => {
  return listUsuariosController.handle(request, response)
})

usuariosRoutes.get('/:id', (request, response) => {
  //Rota com parametro
  return showUsuariosController.handle(request, response)
})

usuariosRoutes.put('/:id', (request, response) => {
  return updateUsuarioController.handle(request, response)
})

usuariosRoutes.delete('/:id', (request, response) => {
  return DeleteUsuarioController.handle(request, response)
})

export { usuariosRoutes }
