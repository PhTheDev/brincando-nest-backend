import { Injectable } from '@nestjs/common';
import { CreateAssinaturaDto } from './dto/create-assinatura.dto';
import { UpdateAssinaturaDto } from './dto/update-assinatura.dto';

@Injectable()
export class AssinaturasService {
  create(createAssinaturaDto: CreateAssinaturaDto) {
    return 'This action adds a new assinatura';
  }

  findAll() {
    return `This action returns all assinaturas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assinatura`;
  }

  update(id: number, updateAssinaturaDto: UpdateAssinaturaDto) {
    return `This action updates a #${id} assinatura`;
  }

  remove(id: number) {
    return `This action removes a #${id} assinatura`;
  }
}
