import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTreeFall1603144428931 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'treefalls',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'street', type: 'varchar' },
          { name: 'neighborhood', type: 'varchar' },
          { name: 'city', type: 'varchar' },
          { name: 'state', type: 'varchar' },
          { name: 'country', type: 'varchar' },
          { name: 'zipcode', type: 'varchar' },
          { name: 'latitude', type: 'decimal', precision: 2, scale: 10 },
          { name: 'longitude', type: 'decimal', precision: 2, scale: 10 },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('treefalls');
  }
}
