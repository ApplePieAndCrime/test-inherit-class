import { ApiProperty } from '@nestjs/swagger';

export class TranslatorTranslateDto {
  @ApiProperty({ example: 'en' })
  readonly from: string;

  @ApiProperty({ example: 'ru' })
  readonly to: string;

  @ApiProperty({ example: 'Hello' })
  readonly text: string;
}
