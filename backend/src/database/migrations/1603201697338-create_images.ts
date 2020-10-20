import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createImages1603201697338 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'images',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'treefall_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'ImageTreeFall',
            columnNames: ['treefall_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'treefalls',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }
}
