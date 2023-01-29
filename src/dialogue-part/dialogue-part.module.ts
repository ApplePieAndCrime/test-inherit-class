import { DialogueModule } from './../dialogue/dialogue.module';
import { DialoguePart } from './entities/dialogue-part.entity';
import { Dialogue } from './../dialogue/entities/dialogue.entity';
import { User } from './../user/entities/user.entity';
import { Module } from '@nestjs/common';
import { DialoguePartService } from './dialogue-part.service';
import { DialoguePartController } from './dialogue-part.controller';
import { UserModule } from 'src/user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [DialoguePartController],
  providers: [DialoguePartService],
  imports: [
    SequelizeModule.forFeature([User, Dialogue, DialoguePart]),
    UserModule,
    DialogueModule,
  ],
  exports: [DialoguePartService],
})
export class DialoguePartModule {}
