import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './models/users/users.controller';
import { ProductsController } from './models/products/products.controller';
import { CategoryController } from './models/category/category.controller';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './models/users/users.service';
import { AuthModule } from './auth/auth/auth.module';
import { UsersModule } from './models/users/users.module';
import { UtilsModule } from './common/utils/utils.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    UtilsModule,
  ],
  controllers: [
    AppController,
    UsersController,
    ProductsController,
    CategoryController,
  ],
  providers: [AppService, UsersService],
})
export class AppModule {}
