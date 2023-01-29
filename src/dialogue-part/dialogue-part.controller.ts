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
export class DialoguePartController {
  constructor(private readonly dialoguePartService: DialoguePartService) {}

  @Post()
  create(@Body() createDialoguePartDto: CreateDialoguePartDto) {
    return this.dialoguePartService.create(createDialoguePartDto);
  }

  @Get()
  findAll() {
    return this.dialoguePartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dialoguePartService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDialoguePartDto: UpdateDialoguePartDto,
  ) {
    return this.dialoguePartService.update(+id, updateDialoguePartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dialoguePartService.remove(+id);
  }
}
