import { Usuario } from '../http/routes/entities/Usuario'
import { dataSource } from '@shared/typeorm'
import { Repository } from 'typeorm'

type CreateUsuarioDTO = {
  nome: string
  email: string
  senha: string
}

export type PaginateParams = {
  //Criando o paginador
  page: number
  skip: number
  take: number
} //Parametros do paginator

export type UsuariosPaginateProperties = {
  per_page: number
  total: number
  current_page: number
  data: Usuario[]
} //Retorno do paginator

export class UsuariosRepository {
  private repository: Repository<Usuario> //Essa variavel vai manipular as informações da estrutura de dados role
  private static INSTANCE: UsuariosRepository //Implementação do singleton | Tambem é a minha instancia
  //Static é uma variavel que não terá o valor alterado dentro do código
  private constructor() {
    this.repository = dataSource.getRepository(Usuario) //Atribuindo a minha propriedade repository o repositorio de um objeto Role
    //Quando instanciar a classe Role, ele fala que se iniciará como um array vazio
  }

  public static getInstance(): UsuariosRepository {
    if (!UsuariosRepository.INSTANCE) {
      UsuariosRepository.INSTANCE = new UsuariosRepository()
    }
    return UsuariosRepository.INSTANCE
  }

  //Método usado para garantir que tenha apenas 1 instancia de RolesRepository dentro do código
  //If mostra que se a varivael INSTANCE (Onde guarda a informação da instancia do repositorio) for false, ele cria uma

  async create({ nome, email, senha }: CreateUsuarioDTO): Promise<Usuario> {
    //Como o método é assincrono ele tem sempre que retornar uma promessa
    const role = this.repository.create({ nome, email, senha })
    return this.repository.save(role)
  }

  async save(usuario: Usuario): Promise<Usuario> {
    return this.repository.save(usuario)
  }

  async delete(usuario: Usuario): Promise<void> {
    await this.repository.remove(usuario)
  }
  //Diferença do método create pro método save, é que no create estamos criando um novo objeto pra depois salvar. Já no Save, passamos uma propiedade como parametro e salvamos depois

  async findByName(nome: string): Promise<Usuario | null> {
    //TypeORM retorna null no lugar de undefinide
    return await this.repository.findOneBy({ nome }) //Quando o nome do parametro do método é diferente do nome da coluna a ser buscada, temos que referenciar desta forma, porem quando é igual podemos passar somente o nome
  }
  async findByEmail(email: string): Promise<Usuario | null> {
    //TypeORM retorna null no lugar de undefinide
    return await this.repository.findOneBy({ email }) //Quando o nome do parametro do método é diferente do nome da coluna a ser buscada, temos que referenciar desta forma, porem quando é igual podemos passar somente o nome
  }

  async findById(id: string): Promise<Usuario | null> {
    //TypeORM retorna null no lugar de undefinide
    return await this.repository.findOneBy({ id }) //Quando o nome do parametro do método é diferente do nome da coluna a ser buscada, temos que referenciar desta forma, porem quando é igual podemos passar somente o nome
  }

  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<UsuariosPaginateProperties> {
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
  //método getAll com paginador
}
