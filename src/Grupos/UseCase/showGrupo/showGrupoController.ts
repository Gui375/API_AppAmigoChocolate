//Métodos que a rota chama
import { Request, Response } from 'express'
import { showGrupoUseCase } from './showGrupoUseCase'

export class ShowGrupoController {
  constructor(private showGrupoUseCase: showGrupoUseCase) {}
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const grupo = await this.showGrupoUseCase.execute({ id })

    return response.status(200).json(grupo)
  }
}
