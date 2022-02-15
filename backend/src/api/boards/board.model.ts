import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Board } from "../../model/board.entity";
import { BoardController } from "./board.controller";
import { BoardService } from "./board.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Board])
  ],
  providers: [BoardService],
  controllers: [BoardController],
  exports: []
})

export class BoardModule { }