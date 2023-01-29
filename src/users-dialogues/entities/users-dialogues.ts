import { User } from 'src/user/entities/user.entity';
import { Dialogue } from 'src/dialogue/entities/dialogue.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table({ tableName: 'users-dialogues' })
export class UsersDialogues extends Model<UsersDialogues> {
  @ApiProperty({
    example: '8a6e0804-2bd0-4672-b79d-d97027f9071a',
    description: 'Уникальный идентификатор',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
    defaultValue: uuidv4(),
  })
  id: string;

  @ForeignKey(() => Dialogue)
  dialogueId: string;

  @BelongsTo(() => Dialogue)
  dialogue: Dialogue;

  @ForeignKey(() => User)
  userId: string;

  @BelongsTo(() => User)
  user: User;
}
