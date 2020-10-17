import {MigrationInterface, QueryRunner} from "typeorm";

export class createJacketModel1602909315784 implements MigrationInterface {
    name = 'createJacketModel1602909315784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "jacket_style_enum" AS ENUM('track', 'winter', 'windbreakers', 'rain', 'fleece', 'full_zip', 'hoodies', 'bomber')`);
        await queryRunner.query(`CREATE TYPE "jacket_color_enum" AS ENUM('white', 'black', 'gray', 'red', 'green', 'blue')`);
        await queryRunner.query(`CREATE TABLE "jacket" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "price" integer NOT NULL, "brand" character varying NOT NULL, "style" "jacket_style_enum" NOT NULL, "color" "jacket_color_enum" NOT NULL, CONSTRAINT "PK_aa69a4381e05438944afd65fdbc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "jacket"`);
        await queryRunner.query(`DROP TYPE "jacket_color_enum"`);
        await queryRunner.query(`DROP TYPE "jacket_style_enum"`);
    }

}
