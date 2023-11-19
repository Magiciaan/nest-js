import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  //   Post,
  //   Query,
} from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers() {
    // return this.configService.get('DATABASE_URL');
    return this.userService.fetchUsers();
  }

  @Get('google')
  async auth() {}

  @Get(':id')
  getUserById(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.fetchUser(id);
  }

  //   @Post('create')
  //   createUser(
  //     @Query() client_id: string,
  //     @Query() scope: string,
  //     @Query() state: string,
  //   ) {
  // return this.userService.registerUser(client_id, scope, state);
  //   }
}
