import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, } from 'class-validator';
import { User } from '../../../model/user.entity';

export class UserDTO implements Readonly<UserDTO> {
  @ApiProperty({ required: true })
  @IsUUID()
  id: string;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  email: string;


  @ApiProperty({ required: false })
  @IsString()
  bio: string;

  @ApiProperty({ required: false })
  @IsString()
  image: string;


  public static from(dto: Partial<UserDTO>) {
    const it = new UserDTO();
    it.id = dto.id;
    it.name = dto.name;
    it.email = dto.email;
    it.bio = dto.bio;
    it.image = dto.image;

    return it;
  }

  public static fromEntity(entity: User) {
    return this.from({
      id: entity.id,
      name: entity.name,
      email: entity.email,
      bio: entity.bio,
      image: entity.image
    });
  }

  public static toEntity(dto: Partial<UserDTO>) {
    const it = new UserDTO();
    it.id = dto.id;
    it.name = dto.name;
    it.image = '/image';
    it.email = dto.email;
    it.bio = dto.bio
    return it;
  }
}
