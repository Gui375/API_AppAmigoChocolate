//Métodos que a rota chama
import { Request, Response } from 'express'
import { ValidaNomeUseCase } from './showValidaNomeUseCase'

export class ValidaNomeController {
  constructor(private showUsuarioUseCase: ValidaNomeUseCase) {}
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, senha } = request.params
    const usuario = await this.showUsuarioUseCase.execute({ nome, senha })

    return response.status(200).json(usuario)
  }
}
