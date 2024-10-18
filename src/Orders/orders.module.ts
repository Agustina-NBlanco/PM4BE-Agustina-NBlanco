import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderDetails } from "src/entities/orderDetails.entity";
import { Orders } from "src/entities/orders.entity";
import { Products } from "src/entities/products.entity";
import { Users } from "src/entities/users.entity";
import { ProductsModule } from "src/Products/products.module";
import { UserModule } from "src/Users/users.module";
import { OrdersController } from "./orders.controller";
import { OrdersService } from "./orders.service";
import { UsersService } from "src/Users/users.service";
import { ProductsService } from "src/Products/products.service";
import { OrderDetailService } from "../Order-detail/order-detail.service";
import { SharedModule } from "src/shared-module/shared-module.module";
import { CategoriesModule } from "src/categories/categories.module";

@Module({
    imports: [TypeOrmModule.forFeature([Orders, Users, OrderDetails, Products]),
        UserModule,
        ProductsModule,
        SharedModule,
        CategoriesModule
    ],

    controllers: [OrdersController],
    providers: [OrdersService, UsersService, ProductsService, OrderDetailService]

})

export class OrdersModule { }
