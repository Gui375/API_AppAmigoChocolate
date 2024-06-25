//Métodos que a rota chama
import { Request, Response } from 'express'
import { showUsuarioGrupoUseCase } from './showUsuariosGruposUseCase'

export class ShowUsuarioGrupoController {
  constructor(private showUsuarioGrupoUseCase: showUsuarioGrupoUseCase) {}
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const usuarioInGroup = await this.showUsuarioGrupoUseCase.execute({
      // eslint-disable-next-line prettier/prettier
      id
    })

    return response.status(200).json(usuarioInGroup)
  }
}
