import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateGrupoTable1718638361809 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'grupos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'id_grupo',
            type: 'string',
            isUnique: false,
          },
          {
            name: 'nome',
            type: 'string',
            isUnique: false,
          },
          {
            name: 'quantidadePessoas',
            type: 'number',
            isUnique: false,
          },
          {
            name: 'participanteID',
            type: 'string',
            isUnique: false,
          },
          {
            name: 'ADM',
            type: 'boolean',
            isUnique: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('grupos')
  }
}
