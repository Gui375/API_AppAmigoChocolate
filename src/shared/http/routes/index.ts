import { Router } from 'express'
import { rolesRoutes } from '@roles/http/routes/roles.routes'
import { usuariosRoutes } from 'src/usuarios/http/routes/usuarios.routes'

const routes = Router()

// routes.get('/', (request, response) => {
//   response.json({ message: 'Olá mundo !' })
// })

routes.use('/roles', rolesRoutes)
routes.use('/usuarios', usuariosRoutes)

export { routes }
