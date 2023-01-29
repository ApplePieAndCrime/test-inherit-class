import { Dialogue } from './../../dialogue/entities/dialogue.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';

@Table({ tableName: 'dialogue-parts' })
export class DialoguePart extends Model<DialoguePart> {
  @ApiProperty({
    example: '8a6e0804-2bd0-4672-b79d-d97027f9071a',
    description: 'Уникальный идентификатор',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({
    example: 'Название',
    description: 'Название',
  })
  @Column({
    type: DataType.STRING,
  })
  title: string;

  @ApiProperty({
    example: '8a6e0804-2bd0-4672-b79d-d97027f9071a',
    description: 'id юзер',
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
  })
  ownerId: string;

  @ApiProperty({
    example: '8a6e0804-2bd0-4672-b79d-d97027f9071a',
    description: 'id диалога',
  })
  @ForeignKey(() => Dialogue)
  @Column({
    type: DataType.STRING,
  })
  dialogueId: string;

  @BelongsTo(() => User)
  owner: User;

  @BelongsTo(() => Dialogue)
  dialogue: Dialogue;
}
