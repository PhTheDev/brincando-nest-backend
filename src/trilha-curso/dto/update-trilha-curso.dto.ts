import { PartialType } from '@nestjs/mapped-types';
import { CreateTrilhaCursoDto } from './create-trilha-curso.dto';

export class UpdateTrilhaCursoDto extends PartialType(CreateTrilhaCursoDto) {}
