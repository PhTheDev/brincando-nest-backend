import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgressoAulaService } from './progresso-aula.service';
import { CreateProgressoAulaDto } from './dto/create-progresso-aula.dto';
import { UpdateProgressoAulaDto } from './dto/update-progresso-aula.dto';

@Controller('progresso-aula')
export class ProgressoAulaController {
  constructor(private readonly progressoAulaService: ProgressoAulaService) {}

  @Post()
  create(@Body() createProgressoAulaDto: CreateProgressoAulaDto) {
    return this.progressoAulaService.create(createProgressoAulaDto);
  }

  @Get()
  findAll() {
    return this.progressoAulaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.progressoAulaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgressoAulaDto: UpdateProgressoAulaDto) {
    return this.progressoAulaService.update(+id, updateProgressoAulaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.progressoAulaService.remove(+id);
  }
}
