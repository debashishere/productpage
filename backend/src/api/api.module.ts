import { Module } from "@nestjs/common";
import { BoardModule } from "./boards/board.model";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [BoardModule, UsersModule],
  providers: [],
  controllers: [],
  exports: []
})


export class apiModule { }