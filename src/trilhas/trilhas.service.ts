import { Injectable } from '@nestjs/common';
import { CreateTrilhaDto } from './dto/create-trilha.dto';
import { UpdateTrilhaDto } from './dto/update-trilha.dto';

@Injectable()
export class TrilhasService {
  create(createTrilhaDto: CreateTrilhaDto) {
    return 'This action adds a new trilha';
  }

  findAll() {
    return `This action returns all trilhas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trilha`;
  }

  update(id: number, updateTrilhaDto: UpdateTrilhaDto) {
    return `This action updates a #${id} trilha`;
  }

  remove(id: number) {
    return `This action removes a #${id} trilha`;
  }
}
