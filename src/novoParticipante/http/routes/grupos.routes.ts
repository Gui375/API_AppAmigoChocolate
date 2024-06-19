import { Router } from 'express'
import { NewParticipanteGrupoController } from 'src/novoParticipante/UseCase/createUsuario'

const NovoGruposRoutes = Router()

NovoGruposRoutes.post('/', (request, response) => {
  return NewParticipanteGrupoController.handle(request, response)
})

export { NovoGruposRoutes }
