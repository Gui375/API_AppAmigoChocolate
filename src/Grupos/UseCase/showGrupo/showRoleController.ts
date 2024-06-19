//Métodos que a rota chama
import { Request, Response } from 'express'
import { showUsuarioUseCase } from './showRoleUseCase'

export class showUsuarioController {
  constructor(private showUsuarioUseCase: showUsuarioUseCase) {}
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const usuario = await this.showUsuarioUseCase.execute({ id })

    return response.status(200).json(usuario)
  }
}
