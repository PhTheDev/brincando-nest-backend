import { PartialType } from '@nestjs/mapped-types';
import { CreateProgressoAulaDto } from './create-progresso-aula.dto';

export class UpdateProgressoAulaDto extends PartialType(CreateProgressoAulaDto) {}
