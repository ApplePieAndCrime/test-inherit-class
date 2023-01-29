import { Dialogue } from 'src/dialogue/entities/dialogue.entity';
import { BaseService } from './../app.service';

import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateDialogueDto } from './dto/create-dialogue.dto';
import { UpdateDialogueDto } from './dto/update-dialogue.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
// export class DialogueService extends BaseService<
//   Dialogue,
//   CreateDialogueDto,
//   UpdateDialogueDto
// > {
//   constructor(
//     @InjectModel(Dialogue) private dialogueRepository: typeof Dialogue,
//   ) {
//     super(dialogueRepository);
//   }
export class DialogueService extends BaseService<
  Dialogue,
  CreateDialogueDto,
  UpdateDialogueDto
> {
  constructor(
    @InjectModel(Dialogue) private dialogueRepository: typeof Dialogue,
  ) {
    super(dialogueRepository);
  }

  // create(createDialogueDto: CreateDialogueDto) {
  //   return this.dialogueRepository.create(createDialogueDto);
  // }

  // findAll() {
  //   return `This action returns all dialogue`;
  // }

  // async findOne(id: string) {
  //   const dialogue = await this.dialogueRepository.findOne({ where: { id } });
  //   dialogue.users;
  //   return `This action returns a #${id} dialogue`;
  // }

  // update(id: number, updateDialogueDto: UpdateDialogueDto) {
  //   return `This action updates a #${id} dialogue`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} dialogue`;
  // }
}
