import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/user.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: UserDTO) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.getOne(id);
  }

  // TODO
  @Post('/email')
  getOneByEmail() {
    let email = 'test'
    return this.usersService.getOneByEmail(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedUser: UserDTO) {
    return this.usersService.update(id, updatedUser);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
