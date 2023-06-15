import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from './repositories/users.repository';
import { UsersPrismaRepository } from './repositories/prisma/users.prisma.repository';
import { AnnouncementModule } from '../announcement/announcement.module';

@Module({
  imports: [forwardRef(() => AnnouncementModule)],
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    { provide: UserRepository, useClass: UsersPrismaRepository },
  ],
  exports: [UsersService],
})
export class UsersModule {}
