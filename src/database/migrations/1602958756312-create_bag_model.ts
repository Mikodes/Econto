import {MigrationInterface, QueryRunner} from "typeorm";

export class createBagModel1602958756312 implements MigrationInterface {
    name = 'createBagModel1602958756312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "bag_color_enum" AS ENUM('white', 'black', 'gray', 'red', 'green', 'blue')`);
        await queryRunner.query(`CREATE TABLE "bag" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "price" integer NOT NULL, "brand" character varying NOT NULL, "color" "bag_color_enum" NOT NULL, CONSTRAINT "PK_6e681d0246f71dc274b5a5d9955" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "bag"`);
        await queryRunner.query(`DROP TYPE "bag_color_enum"`);
    }

}
