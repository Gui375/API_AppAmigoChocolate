//Métodos que a rota chama
import { Request, Response } from 'express'
import { deleteUsuarioUseCase } from './DeleteUsuarioUseCase'

export class deleteUsuarioController {
  constructor(private deleteUsuarioUseCase: deleteUsuarioUseCase) {}
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    await this.deleteUsuarioUseCase.execute({ id })

    return response.status(204).send({ message: 'Conteudo excluido' })
  }
}
