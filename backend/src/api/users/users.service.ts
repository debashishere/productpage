import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
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
    const query = { where: { id } }
    return this.userRepository.findOne(query)

  }

  getOneByUID(firebaseUID: string) {
    const query = { where: { firebaseUID } }
    return this.userRepository.findOne(query)

  }

  getOneByEmail(email: string) {
    const query = { where: { email } }
    return this.userRepository.findOne(query)

  }

  async update(id: string, user: UserDTO): Promise<User> {
    // Update
    await this.userRepository.update(id, {
      ...(user.name && { name: user.name }),
      ...(user.email && { email: user.email }),
      ...(user.bio && { bio: user.bio }),
      ...(user.image && { image: user.image })
    });

    // Return
    return this.userRepository.findOneOrFail(id);
  }

  remove(id: string) {
    return this.userRepository.delete(id)
  }
}
