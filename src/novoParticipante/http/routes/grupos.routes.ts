import { Router } from 'express'
import { ShowUsuariosInGroupsController } from 'src/novoParticipante/UseCase/GetUsuarioGrupos'
import { NewParticipanteGrupoController } from 'src/novoParticipante/UseCase/createUsuario'

const NovoGruposRoutes = Router()

NovoGruposRoutes.post('/', (request, response) => {
  return NewParticipanteGrupoController.handle(request, response)
})

NovoGruposRoutes.get('/:id', (request, response) => {
  return ShowUsuariosInGroupsController.handle(request, response)
})

export { NovoGruposRoutes }
