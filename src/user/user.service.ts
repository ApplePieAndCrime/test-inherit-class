import { BaseService } from './../app.service';
import { TranslatorService } from './../translator/translator.service';

import { Dialogue } from './../dialogue/entities/dialogue.entity';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ScopeFindOptions } from 'sequelize-typescript/dist/scopes/scope-find-options';
import { Repository, ScopeOptions } from 'sequelize-typescript';
import { WhereOptions } from 'sequelize';

@Injectable()
// export class UserService extends Service {
//   constructor (@InjectModel('Value2') value: number) {
//     super(value)
//     console.log(`Service2 -> ${value}`)
//   }
// }
export class UserService extends BaseService<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(
    @InjectModel(User) protected readonly userRepository: typeof User,
  ) {
    super(userRepository);
  }

  // create(createUserDto: CreateDto) {
  //   return 'This action adds a new user';
  // }

  async findAll(filter): Promise<string> {
    // return this.userRepository.findAll(filter);
    return 'hello';
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateDto: UpdateDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
