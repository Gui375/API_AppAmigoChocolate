import { Router } from 'express'
import { listGruposController } from 'src/Grupos/UseCase/listGrupos'

const gruposRoutes = Router()

// gruposRoutes.post('/', (request, response) => {
//   return createUsuariosController.handle(request, response)
// })

gruposRoutes.get('/', (request, response) => {
  return listGruposController.handle(request, response)
})

// gruposRoutes.get('/:id', (request, response) => {
//   //Rota com parametro
//   return showUsuariosController.handle(request, response)
// })

// gruposRoutes.put('/:id', (request, response) => {
//   return updateUsuarioController.handle(request, response)
// })

// gruposRoutes.delete('/:id', (request, response) => {
//   return DeleteUsuarioController.handle(request, response)
// })

export { gruposRoutes }
