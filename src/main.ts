import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middlewares/loggerGlobal.middlewar';
import { ValidationPipe } from '@nestjs/common';
import { CategoriesSeed } from './seeds/categories/categories.seed';
import { ProductsSeed } from './seeds/products/products.seed';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UsersSeed } from './seeds/users/user.seed';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.use(loggerGlobal)

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest Api-Ecommerce2024')
    .setDescription('API Nest JS para Ecommerce de productos y categorias en el que los usuarios pueden ver productos sin iniciar sesión o pueden registrarse, iniciar sesión y comprar productos')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig)

  SwaggerModule.setup('API', app, document)

  const categoriesSeed = app.get(CategoriesSeed)
  await categoriesSeed.seedCategories()
  console.log('Categorias Cargadas');

  const productSeed = app.get(ProductsSeed)
  await productSeed.seedProducts()
  console.log('Productos Cargados');

  const usersSeed = app.get(UsersSeed)
  await usersSeed.seedUsers()
  console.log('Usuarios Cargados');


  await app.listen(process.env.PORT || 3000);
}
bootstrap();
