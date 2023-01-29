import { ApiProperty } from '@nestjs/swagger';

export class CreateDialogueDto {
  @ApiProperty({
    example: 'Название',
    description: 'Название',
  })
  title: string;

  @ApiProperty({
    example: '8a6e0804-2bd0-4672-b79d-d97027f9071a',
    description: 'id комнаты',
  })
  roomId: string;
}
