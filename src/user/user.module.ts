import { DialoguePart } from './../dialogue-part/entities/dialogue-part.entity';
import { Dialogue } from 'src/dialogue/entities/dialogue.entity';
import { BaseService } from './../app.service';
import { User } from './entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User, Dialogue, DialoguePart])],
  exports: [UserService],
})
export class UserModule {}
