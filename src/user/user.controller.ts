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

@ApiTags('юзеры')
@Controller('users')
export class UserController extends BaseController<
  UserService,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(protected userService: UserService) {
    super(userService);
  }
  @Post()
  create(@Body() createDto: string) {
    return 'hello';
    // return this.userService.create(createDto);
  }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // findAll(@Query('filter') filter: any) {
  //   return this.userService.findAll(filter);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
