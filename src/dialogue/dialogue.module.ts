import { DialoguePart } from './../dialogue-part/entities/dialogue-part.entity';
import { User } from './../user/entities/user.entity';
import { Dialogue } from './entities/dialogue.entity';
import { Module } from '@nestjs/common';
import { DialogueService } from './dialogue.service';
import { DialogueController } from './dialogue.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [DialogueController],
  providers: [DialogueService],
  imports: [
    SequelizeModule.forFeature([User, Dialogue, DialoguePart]),
    UserModule,
  ],
  exports: [DialogueService],
})
export class DialogueModule {}
