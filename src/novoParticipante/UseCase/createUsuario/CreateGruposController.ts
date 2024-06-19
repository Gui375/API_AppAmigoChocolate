//Métodos que a rota chama
import { Request, Response } from 'express'
import { CreateGruposUseCase } from './CreateGruposUseCase'

export class CreateGruposController {
  constructor(private createGruposUseCase: CreateGruposUseCase) {}
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_grupo, nome, quantidadePessoas, participanteID, ADM } =
      request.body

    const usuario = await this.createGruposUseCase.execute({
      id_grupo,
      nome,
      quantidadePessoas,
      participanteID,
      ADM,
    })

    return response.status(201).json(usuario)
  }
}
