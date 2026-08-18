import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../generated/prisma/client';

describe('UsersService', () => {
  let service: UsersService;
  const prisma = {
    $transaction: jest.fn((ops: Promise<unknown>[]) => Promise.all(ops)),
    user: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn(),
    },
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();

    service = module.get(UsersService);
  });

  it('creates a user', async () => {
    const dto = { email: 'a@b.com', name: 'Ada' };
    prisma.user.create.mockResolvedValue({ id: 1, ...dto });

    await expect(service.create(dto)).resolves.toEqual({ id: 1, ...dto });
    expect(prisma.user.create).toHaveBeenCalledWith({ data: dto });
  });

  it('throws ConflictException on duplicate email', async () => {
    const error = new Prisma.PrismaClientKnownRequestError('Unique', {
      code: 'P2002',
      clientVersion: 'test',
    });
    prisma.user.create.mockRejectedValue(error);

    await expect(
      service.create({ email: 'a@b.com' }),
    ).rejects.toBeInstanceOf(ConflictException);
  });

  it('throws NotFoundException when user is missing', async () => {
    prisma.user.findUnique.mockResolvedValue(null);

    await expect(service.findOne(99)).rejects.toBeInstanceOf(NotFoundException);
  });

  it('returns paginated users', async () => {
    const users = [{ id: 1, email: 'a@b.com', name: 'Ada' }];
    prisma.user.findMany.mockResolvedValue(users);
    prisma.user.count.mockResolvedValue(1);

    await expect(
      service.findAll({ page: 1, limit: 10 }),
    ).resolves.toEqual({
      data: users,
      meta: { page: 1, limit: 10, total: 1, totalPages: 1 },
    });
  });
});
