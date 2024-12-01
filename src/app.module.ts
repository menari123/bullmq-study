import { Module } from '@nestjs/common';
import { UserModule } from './user-ms/user.module';
import { QueuModule } from './queue-ms/queue.module';
import { BullBoardController } from './bull-board/bull-board.controller';
import { BullBoardModule } from './bull-board/bull-board.module';

@Module({
  imports: [
    UserModule, 
    QueuModule,
    BullBoardModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
