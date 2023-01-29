import { DialoguePart } from './../../dialogue-part/entities/dialogue-part.entity';
import { Dialogue } from './../../dialogue/entities/dialogue.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table({ tableName: 'users' })
export class User extends Model<User> {
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

  @ApiProperty({
    example: 'nickname',
    description: 'Ник пользвателя',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  nickname: string;

  @ApiProperty({
    example: 'admin@mail.ru',
    description: 'Email',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;

  @ApiProperty({
    example: 'admin',
    description: 'Email',
  })
  @Column({
    type: DataType.STRING,
  })
  password: string;

  // @ApiProperty({
  //   example: '[]',
  //   description: 'Юзеры',
  // })
  // @BelongsToMany(() => Dialogue, () => User)
  // dialogues: Dialogue[];

  // @HasMany(() => DialoguePart)
  // dialogueParts: DialoguePart[];
}
