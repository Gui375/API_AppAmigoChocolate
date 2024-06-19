import { Router } from 'express'
import { DeleteGrupoController } from 'src/Grupos/UseCase/DeleteGrupo'
import { updateGrupoController } from 'src/Grupos/UseCase/UpdateGrupo'
import { createGruposController } from 'src/Grupos/UseCase/createNovoGrupo'
import { listGruposController } from 'src/Grupos/UseCase/listGrupos'
import { showGrupoController } from 'src/Grupos/UseCase/showGrupo'

const gruposRoutes = Router()

gruposRoutes.post('/', (request, response) => {
  return createGruposController.handle(request, response)
})

gruposRoutes.get('/', (request, response) => {
  return listGruposController.handle(request, response)
})

gruposRoutes.get('/:id', (request, response) => {
  //Rota com parametro
  return showGrupoController.handle(request, response)
})

gruposRoutes.put('/:id', (request, response) => {
  return updateGrupoController.handle(request, response)
})

gruposRoutes.delete('/:id', (request, response) => {
  return DeleteGrupoController.handle(request, response)
})

export { gruposRoutes }
