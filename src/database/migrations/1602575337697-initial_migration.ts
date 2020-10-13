import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration1602575337697 implements MigrationInterface {
    name = 'initialMigration1602575337697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "shoes_color_enum" AS ENUM('white', 'black', 'gray', 'red', 'green', 'blue')`);
        await queryRunner.query(`CREATE TYPE "shoes_gender_enum" AS ENUM('men', 'women', 'kids')`);
        await queryRunner.query(`CREATE TABLE "shoes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "price" integer NOT NULL, "brand" character varying NOT NULL, "size" integer NOT NULL, "color" "shoes_color_enum" NOT NULL, "gender" "shoes_gender_enum" NOT NULL, CONSTRAINT "PK_5367569fb93ba8de671a6890aae" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "shoes"`);
        await queryRunner.query(`DROP TYPE "shoes_gender_enum"`);
        await queryRunner.query(`DROP TYPE "shoes_color_enum"`);
    }

}
