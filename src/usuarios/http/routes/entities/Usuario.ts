import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('usuarios') //Decorator do typeORM | 'role' = nome da tabela
export class Usuario {
  @PrimaryColumn()
  id: string

  @Column()
  nome: string

  @Column()
  email: string

  @Column()
  senha: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    //Verifica se existe id, e caso não, atribui um para o mesmo
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
