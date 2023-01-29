import { BaseService } from './../app.service';
import { DialoguePart } from './entities/dialogue-part.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateDialoguePartDto } from './dto/create-dialogue-part.dto';
import { UpdateDialoguePartDto } from './dto/update-dialogue-part.dto';

@Injectable()
export class DialoguePartService extends BaseService<
  DialoguePart,
  CreateDialoguePartDto,
  UpdateDialoguePartDto
> {
  private dialoguePart;

  constructor(
    @InjectModel(DialoguePart) protected readonly mainRepo: typeof DialoguePart,
  ) {
    super(mainRepo);
    this.dialoguePart = this.dialoguePart;
  }
}
