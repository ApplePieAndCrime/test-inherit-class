import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
@Injectable()
export class CreateUserDto {
  @ApiProperty({
    example: 'nickname',
    description: 'Ник пользвателя',
  })
  nickname: string;

  @IsEmail({}, { message: 'Некорректный email' })
  @ApiProperty({
    example: 'admin@mail.ru',
    description: 'Email',
  })
  email: string;

  @ApiProperty({
    example: 'admin',
    description: 'Email',
  })
  password: string;
}
