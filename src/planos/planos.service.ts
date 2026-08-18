import { Injectable } from '@nestjs/common';
import { CreatePlanoDto } from './dto/create-plano.dto';
import { UpdatePlanoDto } from './dto/update-plano.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { PaginatedResponse } from 'src/common/types/paginated-response';
import { Plano } from 'src/generated/prisma/client';

@Injectable()
export class PlanosService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPlanoDto: CreatePlanoDto) {
    return this.prisma.plano.create({ data: createPlanoDto })
  }

  findAll(query: PaginationQueryDto): Promise<PaginatedResponse<Plano>> {
    return `This action returns all planos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plano`;
  }

  update(id: number, updatePlanoDto: UpdatePlanoDto) {
    return `This action updates a #${id} plano`;
  }

  remove(id: number) {
    return `This action removes a #${id} plano`;
  }
}
