//Métodos que a rota chama
import { Request, Response } from 'express'
import { CreateUsuarioUseCase } from './CreateUsuarioUseCase'

export class CreateUsuarioController {
  constructor(private createUsuarioUseCase: CreateUsuarioUseCase) {}
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, email, senha } = request.body

    const usuario = await this.createUsuarioUseCase.execute({
      nome,
      email,
      senha,
    })

    return response.status(201).json(usuario)
  }
}
