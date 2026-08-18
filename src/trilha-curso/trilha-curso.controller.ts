import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrilhaCursoService } from './trilha-curso.service';
import { CreateTrilhaCursoDto } from './dto/create-trilha-curso.dto';
import { UpdateTrilhaCursoDto } from './dto/update-trilha-curso.dto';

@Controller('trilha-curso')
export class TrilhaCursoController {
  constructor(private readonly trilhaCursoService: TrilhaCursoService) {}

  @Post()
  create(@Body() createTrilhaCursoDto: CreateTrilhaCursoDto) {
    return this.trilhaCursoService.create(createTrilhaCursoDto);
  }

  @Get()
  findAll() {
    return this.trilhaCursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trilhaCursoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrilhaCursoDto: UpdateTrilhaCursoDto) {
    return this.trilhaCursoService.update(+id, updateTrilhaCursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trilhaCursoService.remove(+id);
  }
}
