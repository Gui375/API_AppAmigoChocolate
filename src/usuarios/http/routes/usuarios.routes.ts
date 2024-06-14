import { Router } from 'express'
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

// rolesRoutes.put('/:id', (request, response) => {
//   return updateRolesController.handle(request, response)
// })

// rolesRoutes.delete('/:id', (request, response) => {
//   return deleteRolesController.handle(request, response)
// })

export { usuariosRoutes }
