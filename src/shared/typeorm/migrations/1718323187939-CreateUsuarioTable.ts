import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsuarioTable1718323187938 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'string',
            isUnique: false,
          },
          {
            name: 'email',
            type: 'string',
            isUnique: false,
          },
          {
            name: 'senha',
            type: 'string',
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
    await queryRunner.dropTable('usuarios')
  }
}
