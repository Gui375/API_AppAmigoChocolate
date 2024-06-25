import { NovoNoParticipante } from '../http/routes/entities/Grupo'
import { dataSource } from '@shared/typeorm'
import { Repository } from 'typeorm'

type CreateGrupoDTO = {
  id_grupo: string
  id_usuario: string
  ADM: boolean
}

export class NovoGruposRepository {
  private repository: Repository<NovoNoParticipante> //Essa variavel vai manipular as informações da estrutura de dados role
  private static INSTANCE: NovoGruposRepository //Implementação do singleton | Tambem é a minha instancia
  //Static é uma variavel que não terá o valor alterado dentro do código
  private constructor() {
    this.repository = dataSource.getRepository(NovoNoParticipante) //Atribuindo a minha propriedade repository o repositorio de um objeto Role
    //Quando instanciar a classe Role, ele fala que se iniciará como um array vazio
  }

  public static getInstance(): NovoGruposRepository {
    if (!NovoGruposRepository.INSTANCE) {
      NovoGruposRepository.INSTANCE = new NovoGruposRepository()
    }
    return NovoGruposRepository.INSTANCE
  }

  async findById(id: string): Promise<NovoNoParticipante | null> {
    //TypeORM retorna null no lugar de undefinide
    return await this.repository.findOneBy({ id }) //Quando o nome do parametro do método é diferente do nome da coluna a ser buscada, temos que referenciar desta forma, porem quando é igual podemos passar somente o nome
  }

  async findUsersInGroup(idgrupo: string): Promise<NovoNoParticipante[]> {
    return await this.repository.find({
      where: {
        id_grupo: idgrupo,
      },
    })
  }

  async findByUserAndGroup(
    id_usuario: string,
    id_grupo: string,
  ): Promise<NovoNoParticipante | undefined> {
    return await this.repository.findOne({ where: { id_usuario, id_grupo } })
  }

  async create({
    id_grupo,
    id_usuario,
    ADM,
  }: CreateGrupoDTO): Promise<NovoNoParticipante> {
    //Como o método é assincrono ele tem sempre que retornar uma promessa
    const grupo = this.repository.create({
      id_grupo,
      id_usuario,
      ADM,
    })
    return this.repository.save(grupo)
  }
}
