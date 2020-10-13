import {MigrationInterface, QueryRunner} from "typeorm";

export class addShoesModel1602568054813 implements MigrationInterface {
    name = 'addShoesModel1602568054813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "shoes_color_enum" AS ENUM('0', '1', '2', '3', '4', '5')`);
        await queryRunner.query(`CREATE TYPE "shoes_gender_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`CREATE TABLE "shoes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" integer NOT NULL, "brand" character varying NOT NULL, "size" integer NOT NULL, "color" "shoes_color_enum" NOT NULL, "gender" "shoes_gender_enum" NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5367569fb93ba8de671a6890aae" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "shoes"`);
        await queryRunner.query(`DROP TYPE "shoes_gender_enum"`);
        await queryRunner.query(`DROP TYPE "shoes_color_enum"`);
    }

}
