import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UtilsModule } from 'src/common/utils/utils.module';
import { AuthModule } from 'src/auth/auth/auth.module';

@Module({
  providers: [UsersService, AuthModule],
  exports: [UsersService],
  controllers: [UsersController],
  imports: [UtilsModule, AuthModule],
})
export class UsersModule {}
