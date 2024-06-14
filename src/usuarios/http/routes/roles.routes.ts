import { Router } from 'express'
import { createUsuariosController } from 'src/usuarios/UseCase/createUsuario'

const usuariosRoutes = Router()

usuariosRoutes.post('/', (request, response) => {
  return createUsuariosController.handle(request, response)
})

// rolesRoutes.get('/', (request, response) => {
//   return listRolesController.handle(request, response)
// })

// rolesRoutes.get('/:id', (request, response) => {
//   //Rota com parametro
//   return showRolesController.handle(request, response)
// })

// rolesRoutes.put('/:id', (request, response) => {
//   return updateRolesController.handle(request, response)
// })

// rolesRoutes.delete('/:id', (request, response) => {
//   return deleteRolesController.handle(request, response)
// })

export { usuariosRoutes }
