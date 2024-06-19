import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('grupos') //Decorator do typeORM | 'role' = nome da tabela
export class NovoNoGrupo {
  @PrimaryColumn()
  id: string

  @Column()
  id_grupo: string

  @Column()
  nome: string

  @Column()
  quantidadePessoas: number

  @Column()
  participanteID: string

  @Column()
  ADM: boolean

  @CreateDateColumn()
  created_at: Date

  constructor() {
    //Verifica se existe id, e caso não, atribui um para o mesmo
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
