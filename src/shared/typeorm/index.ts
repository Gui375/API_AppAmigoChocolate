//Conexão com o banco
import { DataSource } from 'typeorm'
import { CreateRolesTable1717677183833 } from './migrations/1717677183833-CreateRolesTable'
import { Role } from '@roles/http/routes/entities/Role'
import { Usuario } from 'src/usuarios/http/routes/entities/Usuario'
import { CreateUsuarioTable1718323187938 } from './migrations/1718323187939-CreateUsuarioTable'
import { CreateGrupoTable1718638361810 } from './migrations/1718638361804-CreateGrupoTable'
import { Grupo } from 'src/Grupos/http/routes/entities/Grupo'
import { NovoNoParticipante } from 'src/novoParticipante/http/routes/entities/Grupo'
import { CreateNovoParticipanteTable1718910925984 } from './migrations/1718910925984-CreateNovoParticipanteTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  // host: "localhost",
  // port: 3306,
  // username: "test",
  // password: 'test',
  database: './db.sqlite',
  entities: [Role, Usuario, Grupo, NovoNoParticipante], //Definindo as entidades
  migrations: [
    CreateUsuarioTable1718323187938,
    CreateRolesTable1717677183833,
    CreateGrupoTable1718638361810,
    CreateNovoParticipanteTable1718910925984,
  ], //Definindo as migracoes
})

//Comando pra executar as migration npm run typeorm -- -d ./src/shared/typeorm/index.ts  migration:run
