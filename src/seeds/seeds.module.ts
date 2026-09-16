import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categories } from "src/entities/categories.entity";
import { Products } from "src/entities/products.entity";
import { CategoriesSeed } from "./categories/categories.seed";
import { ProductsSeed } from "./products/products.seed";
import { Users } from "src/entities/users.entity";
import { UsersSeed } from "./users/users.seed";


@Module({
    imports: [TypeOrmModule.forFeature([Categories, Products, Users])],
    providers: [CategoriesSeed, ProductsSeed, UsersSeed],
    exports: [CategoriesSeed, ProductsSeed, UsersSeed],
})

export class SeedModule{}