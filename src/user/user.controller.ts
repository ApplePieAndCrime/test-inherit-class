import { ApiTags } from '@nestjs/swagger';
import { BaseController } from './../app.controller';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Query } from '@nestjs/common/decorators';
import { User } from './entities/user.entity';

@ApiTags('юзеры')
@Controller('users')
export class UserController extends BaseController<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  private userService;

  constructor(protected service: UserService) {
    super(service);
    this.userService = service;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
