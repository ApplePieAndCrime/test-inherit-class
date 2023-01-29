import { CreateDialoguePartDto } from './dialogue-part/dto/create-dialogue-part.dto';
import { CreateDialogueDto } from './dialogue/dto/create-dialogue.dto';
import { CreateUserDto } from './user/dto/create-user.dto';
import { Repository } from 'sequelize-typescript';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { Injectable, Query } from '@nestjs/common/decorators';
import { Filterable } from 'sequelize';
import { MakeNullishOptional } from 'sequelize/types/utils';

@Injectable()
export class BaseController<T, CreateDto, UpdateDto> {
  public service;

  constructor(service) {
    this.service = service;
  }

  @Post()
  create(@Body() createDto: CreateDto | string) {
    return this.service.create(createDto);
  }

  @Get()
  findAll(@Query('filter') filter: Filterable<T>) {
    return this.service.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
