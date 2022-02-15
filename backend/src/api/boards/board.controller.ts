import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardDTO } from './dto/board.dto';
import { BoardService } from './board.service';

@Controller('Board')
export class BoardController {
  constructor(private serv: BoardService) { }

  @Get()
  public async getAll(): Promise<BoardDTO[]> {
    return await this.serv.getAll();
  }

  @Post()
  public async post(@Body() dto: BoardDTO): Promise<BoardDTO> {
    return this.serv.create(dto);
  }
}