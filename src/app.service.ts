import { Model, ModelCtor, Repository } from 'sequelize-typescript';
// import { Repository } from 'sequelize-typescript';

import { Injectable, LiteralObject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MakeNullishOptional } from 'sequelize/types/utils';
import { Filterable, NonNullFindOptions, WhereOptions } from 'sequelize';

@Injectable()
export class BaseService<
  T extends Model,
  CreateDto extends MakeNullishOptional<T['_creationAttributes']>,
  UpdateDto,
> {
  public repo: Repository<T>;
  public CreateDto;
  public UpdateDto;

  constructor(repo: Repository<T>) {
    this.repo = repo;
    // this.CreateDto = CreateDto;
    // this.UpdateDto = UpdateDto;
  }
  //  const CreateDto = new this.CreateDto()

  protected create(createDto: CreateDto) {
    return this.repo.create(createDto);
  }

  async findAll(filter?: Filterable<T>): Promise<string | T[]> {
    return this.repo.findAll(filter);
  }

  async findOne(id: string, filter?: Filterable<T>): Promise<T> {
    let { where = {} } = filter || {};
    where = { ...where, id };
    const instance = await this.repo.findOne({ ...filter, where });

    return instance;
  }

  async update(id: string, updateDto: UpdateDto) {
    // const filter: NonNullFindOptions<T> = { where: { id } };
    const whereOptions: WhereOptions<T> = { where: { id } };
    const result = await this.repo.update(updateDto, { where: whereOptions });

    return result;
  }

  async remove(id: string) {
    const instance = await this.repo.findOne({ where: { where: { id } } });
    return instance.destroy();
  }
}
