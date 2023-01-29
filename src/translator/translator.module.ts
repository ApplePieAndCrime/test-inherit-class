import { UserModule } from './../user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { TranslatorService } from './translator.service';
import { TranslatorController } from './translator.controller';

@Module({
  providers: [TranslatorService],
  controllers: [TranslatorController],
  exports: [TranslatorService],
})
export class TranslatorModule {}
