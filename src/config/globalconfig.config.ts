import { ConfigModule } from "@nestjs/config";
import { postgresDataSourceConfig } from "./data-source";


export const globalConfig = ConfigModule.forRoot({
    isGlobal: true,
    load:[postgresDataSourceConfig]
})