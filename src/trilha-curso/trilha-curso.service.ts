import { Injectable } from '@nestjs/common';
import { CreateTrilhaCursoDto } from './dto/create-trilha-curso.dto';
import { UpdateTrilhaCursoDto } from './dto/update-trilha-curso.dto';

@Injectable()
export class TrilhaCursoService {
  create(createTrilhaCursoDto: CreateTrilhaCursoDto) {
    return 'This action adds a new trilhaCurso';
  }

  findAll() {
    return `This action returns all trilhaCurso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trilhaCurso`;
  }

  update(id: number, updateTrilhaCursoDto: UpdateTrilhaCursoDto) {
    return `This action updates a #${id} trilhaCurso`;
  }

  remove(id: number) {
    return `This action removes a #${id} trilhaCurso`;
  }
}
