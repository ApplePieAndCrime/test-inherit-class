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
import { DialogueService } from './dialogue.service';
import { CreateDialogueDto } from './dto/create-dialogue.dto';
import { UpdateDialogueDto } from './dto/update-dialogue.dto';
import { Dialogue } from './entities/dialogue.entity';

@ApiTags('диалоги')
@Controller('dialogues')
export class DialogueController extends BaseController<
  Dialogue,
  CreateDialogueDto,
  UpdateDialogueDto
> {
  constructor(private readonly dialogueService: DialogueService) {
    super(dialogueService);
  }

  // @Post()
  // create(@Body() createDialogueDto: CreateDialogueDto) {
  //   return this.dialogueService.create(createDialogueDto);
  // }

  // @Get()
  // findAll() {
  //   return this.dialogueService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.dialogueService.findOne(id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateDialogueDto: UpdateDialogueDto,
  // ) {
  //   return this.dialogueService.update(+id, updateDialogueDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.dialogueService.remove(+id);
  // }
}
