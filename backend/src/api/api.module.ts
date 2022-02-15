import { Module } from "@nestjs/common";
import { BoardModule } from "./boards/board.model";

@Module({
  imports: [BoardModule],
  providers: [],
  controllers: [],
  exports: []
})


export class apiModule { }