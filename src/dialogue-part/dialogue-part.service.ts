import { Injectable } from '@nestjs/common';
import { CreateDialoguePartDto } from './dto/create-dialogue-part.dto';
import { UpdateDialoguePartDto } from './dto/update-dialogue-part.dto';

@Injectable()
export class DialoguePartService {
  create(createDialoguePartDto: CreateDialoguePartDto) {
    return 'This action adds a new dialoguePart';
  }

  findAll() {
    return `This action returns all dialoguePart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dialoguePart`;
  }

  update(id: number, updateDialoguePartDto: UpdateDialoguePartDto) {
    return `This action updates a #${id} dialoguePart`;
  }

  remove(id: number) {
    return `This action removes a #${id} dialoguePart`;
  }
}
