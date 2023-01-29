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
  private baseService;

  constructor(service) {
    this.baseService = service;
  }

  @Post()
  create(@Body() createDto: CreateDto | string) {
    return this.baseService.create(createDto);
  }

  @Get()
  findAll(@Query('filter') filter: Filterable<T>) {
    return this.baseService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return this.baseService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseService.remove(id);
  }
}
