import { TranslatorTranslateDto } from './dto/translator-translate.dto';
import { ApiTags } from '@nestjs/swagger';
import { TranslatorService } from './translator.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@ApiTags('translator')
@Controller('')
export class TranslatorController {
  constructor(private readonly translatorService: TranslatorService) {}

  @Post('/translate')
  translate(@Body() translatorTranslateDto: TranslatorTranslateDto) {
    return this.translatorService.translate(translatorTranslateDto);
  }

  @Post('/speech')
  speech(@Body() text: string) {
    return this.translatorService.speech(text);
  }
}
