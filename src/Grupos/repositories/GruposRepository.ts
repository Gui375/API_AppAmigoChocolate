import { Grupo } from '../http/routes/entities/Grupo'
import { dataSource } from '@shared/typeorm'
import { Repository } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

type CreateGrupoDTO = {
  id_grupo: string
  nome: string
  quantidadePessoas: number
  valor: number
}

export type PaginateParams = {
  //Criando o paginador
  page: number
  skip: number
  take: number
} //Parametros do paginator

export type GruposPaginateProperties = {
  per_page: number
  total: number
  current_page: number
  data: Grupo[]
}

export class GruposRepository {
  private repository: Repository<Grupo> //Essa variavel vai manipular as informações da estrutura de dados role
  private static INSTANCE: GruposRepository //Implementação do singleton | Tambem é a minha instancia
  //Static é uma variavel que não terá o valor alterado dentro do código
  private constructor() {
    this.repository = dataSource.getRepository(Grupo) //Atribuindo a minha propriedade repository o repositorio de um objeto Role
    //Quando instanciar a classe Role, ele fala que se iniciará como um array vazio
  }

  public static getInstance(): GruposRepository {
    if (!GruposRepository.INSTANCE) {
      GruposRepository.INSTANCE = new GruposRepository()
    }
    return GruposRepository.INSTANCE
  }

  //Método usado para garantir que tenha apenas 1 instancia de RolesRepository dentro do código
  //If mostra que se a varivael INSTANCE (Onde guarda a informação da instancia do repositorio) for false, ele cria uma

  async create({
    id_grupo,
    nome,
    quantidadePessoas,
    valor,
  }: CreateGrupoDTO): Promise<Grupo> {
    //Como o método é assincrono ele tem sempre que retornar uma promessa
    id_grupo = uuidv4()
    const grupo = this.repository.create({
      id_grupo,
      nome,
      quantidadePessoas,
      valor,
    })
    return this.repository.save(grupo)
  }

  async save(grupo: Grupo): Promise<Grupo> {
    return this.repository.save(grupo)
  }

  async delete(grupo: Grupo): Promise<void> {
    await this.repository.remove(grupo)
  }
  //Diferença do método create pro método save, é que no create estamos criando um novo objeto pra depois salvar. Já no Save, passamos uma propiedade como parametro e salvamos depois

  async findByName(nome: string): Promise<Grupo | null> {
    //TypeORM retorna null no lugar de undefinide
    return await this.repository.findOneBy({ nome }) //Quando o nome do parametro do método é diferente do nome da coluna a ser buscada, temos que referenciar desta forma, porem quando é igual podemos passar somente o nome
  }

  // async ValidaIdADM(id: string): Promise<Grupo | null{
  //   if (!this.repository.findOneBy({ id })) {
  //     return null
  //   }
  // }

  async findById(id: string): Promise<Grupo | null> {
    //TypeORM retorna null no lugar de undefinide
    return await this.repository.findOneBy({ id }) //Quando o nome do parametro do método é diferente do nome da coluna a ser buscada, temos que referenciar desta forma, porem quando é igual podemos passar somente o nome
  }

  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<GruposPaginateProperties> {
    const [roles, count] = await this.repository
      .createQueryBuilder()
      .skip(skip)
      .take(take) //Parametros é para o usuário dizer os valores que é pra pegar
      .getManyAndCount()
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: roles,
    }
    return result
  }
  //método getAll com paginadorgit branch -M main
}
