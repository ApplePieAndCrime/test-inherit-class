import { DialoguePart } from './entities/dialogue-part.entity';
import { BaseController } from './../app.controller';
import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DialoguePartService } from './dialogue-part.service';
import { CreateDialoguePartDto } from './dto/create-dialogue-part.dto';
import { UpdateDialoguePartDto } from './dto/update-dialogue-part.dto';

@ApiTags('куски текста')
@Controller('dialogue-parts')
export class DialoguePartController extends BaseController<
  DialoguePart,
  CreateDialoguePartDto,
  UpdateDialoguePartDto
> {
  constructor(private readonly dialoguePartService: DialoguePartService) {
    super(dialoguePartService);
  }
}
