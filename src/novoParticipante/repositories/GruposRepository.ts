import { NovoNoGrupo } from '../http/routes/entities/Grupo'
import { dataSource } from '@shared/typeorm'
import { Repository } from 'typeorm'

type CreateGrupoDTO = {
  id_grupo: string
  nome: string
  quantidadePessoas: number
  participanteID: string
  ADM: boolean
}

export class NovoGruposRepository {
  private repository: Repository<NovoNoGrupo> //Essa variavel vai manipular as informações da estrutura de dados role
  private static INSTANCE: NovoGruposRepository //Implementação do singleton | Tambem é a minha instancia
  //Static é uma variavel que não terá o valor alterado dentro do código
  private constructor() {
    this.repository = dataSource.getRepository(NovoNoGrupo) //Atribuindo a minha propriedade repository o repositorio de um objeto Role
    //Quando instanciar a classe Role, ele fala que se iniciará como um array vazio
  }

  public static getInstance(): NovoGruposRepository {
    if (!NovoGruposRepository.INSTANCE) {
      NovoGruposRepository.INSTANCE = new NovoGruposRepository()
    }
    return NovoGruposRepository.INSTANCE
  }
  async create({
    id_grupo,
    nome,
    quantidadePessoas,
    participanteID,
    ADM,
  }: CreateGrupoDTO): Promise<NovoNoGrupo> {
    //Como o método é assincrono ele tem sempre que retornar uma promessa
    const grupo = this.repository.create({
      id_grupo,
      nome,
      quantidadePessoas,
      participanteID,
      ADM,
    })
    return this.repository.save(grupo)
  }
}
