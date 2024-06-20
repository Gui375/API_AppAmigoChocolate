//Métodos que a rota chama
import { Request, Response } from 'express'
import { UpdateGrupoUseCase } from './UpdateGrupoUseCase'

export class UpdateGrupoController {
  constructor(private updateUsuarioUseCase: UpdateGrupoUseCase) {}
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { id_grupo, nome, quantidadePessoas, valor } = request.body
    const role = await this.updateUsuarioUseCase.execute({
      id,
      id_grupo,
      nome,
      quantidadePessoas,
      valor,
    })

    return response.status(200).json(role)
  }
}
