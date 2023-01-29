import { User } from 'src/user/entities/user.entity';
import { BaseDto } from './../../app.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto extends BaseDto<User> {
  @ApiProperty({
    example: 'nickname',
    description: 'Ник пользвателя',
  })
  nickname: string;

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
