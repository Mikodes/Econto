import {MigrationInterface, QueryRunner} from "typeorm";

export class updateBaseEntity1602496740239 implements MigrationInterface {
    name = 'updateBaseEntity1602496740239'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "isArchived"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "createdBy"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "lastChangedBy"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "internalComment"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "internalComment" character varying(300)`);
        await queryRunner.query(`ALTER TABLE "item" ADD "lastChangedBy" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "createdBy" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "isArchived" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "item" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

}
