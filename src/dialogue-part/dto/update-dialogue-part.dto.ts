import { PartialType } from '@nestjs/swagger';
import { CreateDialoguePartDto } from './create-dialogue-part.dto';

export class UpdateDialoguePartDto extends PartialType(CreateDialoguePartDto) {}
