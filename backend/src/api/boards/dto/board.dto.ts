import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID, } from 'class-validator';
import { Board } from '../../../model/board.entity';

export class BoardDTO implements Readonly<BoardDTO> {
  @ApiProperty({ required: true })
  @IsUUID()
  id: string;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  size: string;

  @ApiProperty({ required: true })
  @IsNumber()
  price: number;

  @ApiProperty({ required: true })
  @IsString()
  image: string;

  @ApiProperty({ required: true })
  @IsString()
  description: string;

  public static from(dto: Partial<BoardDTO>) {
    const it = new BoardDTO();
    it.id = dto.id;
    it.name = dto.name;
    it.size = dto.size
    it.price = dto.price;
    it.image = dto.image;
    it.description = dto.description;
    return it;
  }

  public static fromEntity(entity: Board) {
    return this.from({
      id: entity.id,
      name: entity.name,
      description: entity.description
    });
  }

  public static toEntity(dto: Partial<BoardDTO>) {
    const it = new Board();
    it.id = dto.id;
    it.name = dto.name;
    it.size = dto.size;
    it.price = dto.price;
    it.image = '/image'
    it.description = dto.description;
    return it;
  }
}