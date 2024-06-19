//Métodos que a rota chama
import { Request, Response } from 'express'
import { deleteGrupoUseCase } from './DeleteUsuarioUseCase'

export class deleteGrupoController {
  constructor(private deleteGrupoUseCase: deleteGrupoUseCase) {}
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    await this.deleteGrupoUseCase.execute({ id })

    return response.status(204).send({ message: 'Conteudo excluido' })
  }
}
