//Métodos que a rota chama
import { Request, Response } from 'express'
import { UpdateUsuarioUseCase } from './UpdateRoleUseCase'

export class UpdateUsuarioController {
  constructor(private updateUsuarioUseCase: UpdateUsuarioUseCase) {}
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { nome, email, senha } = request.body
    const role = await this.updateUsuarioUseCase.execute({
      id,
      nome,
      email,
      senha,
    })

    return response.status(200).json(role)
  }
}
