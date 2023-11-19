import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Req,
  UseGuards,
  //   Post,
  //   Query,
} from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers() {
    // return this.configService.get('DATABASE_URL');
    return this.userService.fetchUsers();
  }

  @Get('auth')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}
  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.userService.googleLogin(req);
  }

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
