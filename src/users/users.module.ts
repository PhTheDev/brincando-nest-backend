import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

/**
 * Module ≈ um "app" Django (users/).
 * Declara o que este feature exporta: controller + service.
 * PrismaModule já é @Global(), então não precisa importar de novo.
 */
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
