
import { Injectable } from '@nestjs/common';
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

  getOne(id: string) {
    const query = { where: { id } }
    return this.boardRepository.findOne(query)
  }

  delete(id: string) {
    return this.boardRepository.delete(id)
  }
}