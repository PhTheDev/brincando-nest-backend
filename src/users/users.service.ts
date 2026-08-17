import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

/**
 * Service = camada de negócio (como um service/manager no Django).
 * Controller só recebe HTTP; aqui vive a lógica e o acesso ao banco.
 */
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateUserDto) {
    return this.prisma.user.create({ data: dto }).catch((error) => {
      this.rethrowUniqueEmail(error);
      throw error;
    });
  }

  async findAll(page = 1, limit = 10) {
    const safePage = Math.max(1, page)
    const safeLimit = Math.min(100, Math.max(1, limit))
    const skip = (safePage - 1) * safeLimit
  
    const [data, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        skip,
        take: safeLimit,
        orderBy: { id: 'asc' },
      }),
      this.prisma.user.count(),
    ])
  
    return {
      data,
      meta: {
        page: safePage,
        limit: safeLimit,
        total,
        totalPages: Math.ceil(total / safeLimit),
      },
    }
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async update(id: number, dto: UpdateUserDto) {
    await this.findOne(id);
    return this.prisma.user
      .update({
        where: { id },
        data: dto,
      })
      .catch((error) => {
        this.rethrowUniqueEmail(error);
        throw error;
      });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.user.delete({ where: { id } });
  }

  private rethrowUniqueEmail(error: unknown): void {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      throw new ConflictException('Email already in use');
    }
  }
}
