import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../model/user.entity';
import { IUpdateResult } from './interfaces/update-result.interface';

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

  async getOneByEmail(email: string): Promise<boolean> {
    const query = { where: { email } }
    const foundUser: User = await this.userRepository.findOne(query)
    const isUserExist = foundUser ? true : false;
    return isUserExist
  }

  async update(id: string, user: UserDTO): Promise<User> {
    // construct data with only updated field
    const data = {
      ...(user.name && { name: user.name }),
      ...(user.email && { email: user.email }),
      ...(user.bio && { bio: user.bio }),
      ...(user.image && { image: user.image })
    }

    const toBeReturn = ['id', 'name', 'email', 'bio', 'image']

    const updatedResult: IUpdateResult = await this.userRepository
      .createQueryBuilder("user")
      .update<User>(User, data)
      .where({ id })
      .returning(toBeReturn)
      .updateEntity(true)
      .execute();
    console.log(" updatedResult ", updatedResult)
    // assign returned user
    const updatedUser = updatedResult.raw[0]
    return updatedUser
  }

  remove(id: string) {
    return this.userRepository.delete(id)
  }
}
