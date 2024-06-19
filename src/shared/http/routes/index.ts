import { Router } from 'express'
import { rolesRoutes } from '@roles/http/routes/roles.routes'
import { usuariosRoutes } from 'src/usuarios/http/routes/usuarios.routes'
import { gruposRoutes } from 'src/Grupos/http/routes/grupos.routes'
import { NovoGruposRoutes } from 'src/novoParticipante/http/routes/grupos.routes'

const routes = Router()

// routes.get('/', (request, response) => {
//   response.json({ message: 'Olá mundo !' })
// })

routes.use('/roles', rolesRoutes)
routes.use('/usuarios', usuariosRoutes)
routes.use('/grupos', gruposRoutes)
routes.use('/novoUSgrupo', NovoGruposRoutes)
export { routes }
