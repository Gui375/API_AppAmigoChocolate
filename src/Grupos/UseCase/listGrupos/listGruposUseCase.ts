import {
  GruposRepository,
  GruposPaginateProperties,
} from 'src/Grupos/repositories/GruposRepository'
type ListGruposUseCaseParams = {
  page: number
  limit: number
}

export class ListGruposUseCase {
  constructor(private gruposrepository: GruposRepository) {}

  async execute({
    page,
    limit,
  }: ListGruposUseCaseParams): Promise<GruposPaginateProperties> {
    const take = limit
    const skip = (Number(page) - 1) * take
    return this.gruposrepository.findAll({ page, skip, take })
  }
}
