import {
  UsuariosRepository,
  UsuariosPaginateProperties,
} from 'src/usuarios/repositories/UsuariosRepository'
type ListUsuariosUseCaseParams = {
  page: number
  limit: number
}

export class ListUsuariosUseCase {
  constructor(private usuariosrepository: UsuariosRepository) {}

  async execute({
    page,
    limit,
  }: ListUsuariosUseCaseParams): Promise<UsuariosPaginateProperties> {
    const take = limit
    const skip = (Number(page) - 1) * take
    return this.usuariosrepository.findAll({ page, skip, take })
  }
}
