import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "../../model/product.entity";
import { BoardController } from "./board.controller";
import { BoardService } from "./board.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Product])
  ],
  providers: [BoardService],
  controllers: [BoardController],
  exports: []
})

export class BoardModule { }