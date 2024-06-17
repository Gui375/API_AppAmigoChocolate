import { Request, Response } from 'express'
import { ListGruposUseCase } from './listGruposUseCase'
export class ListGruposController {
  constructor(private listGruposUseCase: ListGruposUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const page =
      request.query.page && Number(request.query.page) > 0 //Condições do if ternary
        ? Number(request.query.page) //Caso seja verdadeiro faz isso
        : 1 //Caso seja falso faz isso
    const limit =
      request.query.limit && Number(request.query.limit) > 0 //Condições do if ternary
        ? Number(request.query.limit) //Caso seja verdadeiro faz isso
        : 15 //Caso seja falso faz isso

    const usuarios = await this.listGruposUseCase.execute({ page, limit })
    return response.status(200).json(usuarios)
  }
}
