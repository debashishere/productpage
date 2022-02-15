
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from '../../model/board.entity';
import { Repository } from 'typeorm';
import { BoardDTO } from './dto/board.dto';

@Injectable()
export class BoardService {
  constructor(@InjectRepository(Board) private readonly boardRepository: Repository<Board>) { }

  public async getAll(): Promise<BoardDTO[]> {
    return await this.boardRepository.find()
      .then(Boards => Boards.map(e => BoardDTO.fromEntity(e)))
  }

  public async create(dto: BoardDTO): Promise<BoardDTO> {
    return this.boardRepository.save(BoardDTO.toEntity(dto))
      .then(e => BoardDTO.fromEntity(e));
  }

  // async update(id: string, user: UserDTO): Promise<User> {
  //   // construct data with only updated field
  //   const data = {
  //     ...(user.name && { name: user.name }),
  //     ...(user.email && { email: user.email }),
  //     ...(user.bio && { bio: user.bio }),
  //     ...(user.image && { image: user.image })
  //   }

  //   const toBeReturn = ['id', 'name', 'email', 'bio', 'image']

  //   const updatedResult: IUpdateResult = await this.userRepository
  //     .createQueryBuilder("user")
  //     .update<User>(User, data)
  //     .where({ id })
  //     .returning(toBeReturn)
  //     .updateEntity(true)
  //     .execute();
  //   console.log(" updatedResult ", updatedResult)
  //   // assign returned user
  //   const updatedUser = updatedResult.raw[0]
  //   return updatedUser
  // }

  async getOne(id: string) {
    const query = { where: { id } }
    const foundBoard = await this.boardRepository.findOne(query)
    if (!foundBoard) {
      throw new NotFoundException('product not found.')
    }
    return foundBoard
  }

  delete(id: string) {
    return this.boardRepository.delete(id)
  }
}