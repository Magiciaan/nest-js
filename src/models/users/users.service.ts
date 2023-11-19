import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/utils/prisma.service';
// import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  //   constructor(private jwtService: JwtService) {}
  constructor(private prisma: PrismaService) {}

  async fetchUsers() {
    return await this.prisma.user.findMany({});
  }

  async fetchUser(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async googleLogin(req) {
    try {
      if (!req.user) {
        return 'No User from Google';
      }

      const newUser = await this.prisma.user.create({
        data: {
          name: req.user.displayName,
          email: req.users.emails[0].value,
        },
      });

      return newUser;
    } catch (error) {
      return error;
    }
  }
}
