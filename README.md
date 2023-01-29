# test-inherit-class

```ts
BaseService<
  T extends Model,
  CreateDto extends MakeNullishOptional<T['_creationAttributes']>,
  UpdateDto,
>
```

```ts
BaseController<T, CreateDto, UpdateDto>
```

*Problem: https://github.com/ApplePieAndCrime/test-inherit-class/issues/1
