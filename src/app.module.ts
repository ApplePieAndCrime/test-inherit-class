import { UsersDialogues } from './users-dialogues/entities/users-dialogues';
import { BaseService } from './app.service';
import { DialoguePart } from './dialogue-part/entities/dialogue-part.entity';
import { Dialogue } from './dialogue/entities/dialogue.entity';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { DialogueModule } from './dialogue/dialogue.module';
import { TranslatorModule } from './translator/translator.module';
import { DialoguePartModule } from './dialogue-part/dialogue-part.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Dialogue, DialoguePart, UsersDialogues],
      autoLoadModels: true,
    }),

    UserModule,
    DialogueModule,
    TranslatorModule,
    DialoguePartModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
