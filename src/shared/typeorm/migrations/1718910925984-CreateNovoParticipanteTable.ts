import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateNovoParticipanteTable1718910925984
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'participantesGrupo',
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
            name: 'id_usuario',
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
