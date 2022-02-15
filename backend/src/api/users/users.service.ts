import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../model/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

  public async create(userDTO: UserDTO): Promise<UserDTO> {
    return this.userRepository.save(UserDTO.toEntity(userDTO))
      .then(createdUser => UserDTO.fromEntity(createdUser))
  }

  public async getAll(): Promise<UserDTO[]> {
    return this.userRepository.find()
      .then(users => users.map(user => UserDTO.fromEntity(user)))
  }

  getOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
