import { Injectable } from '@nestjs/common';
import { CreateProgressoAulaDto } from './dto/create-progresso-aula.dto';
import { UpdateProgressoAulaDto } from './dto/update-progresso-aula.dto';

@Injectable()
export class ProgressoAulaService {
  create(createProgressoAulaDto: CreateProgressoAulaDto) {
    return 'This action adds a new progressoAula';
  }

  findAll() {
    return `This action returns all progressoAula`;
  }

  findOne(id: number) {
    return `This action returns a #${id} progressoAula`;
  }

  update(id: number, updateProgressoAulaDto: UpdateProgressoAulaDto) {
    return `This action updates a #${id} progressoAula`;
  }

  remove(id: number) {
    return `This action removes a #${id} progressoAula`;
  }
}
