import { Controller, Logger, OnModuleInit } from '@nestjs/common';

import { ExpressAdapter } from '@bull-board/express';
import { createBullBoard } from '@bull-board/api';
import * as express from 'express';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { USER_QUEUE } from 'src/config/queues/queues';

const logger = new Logger('BullBoard')

@Controller('bull-board')
class BullBoardController implements OnModuleInit {
  private readonly serverAdapter = new ExpressAdapter();

  constructor(
    @InjectQueue(USER_QUEUE) private readonly userQueue: Queue,
) {}

  onModuleInit() {
    createBullBoard({
      queues: [
        new BullMQAdapter(this.userQueue)
    ],
      serverAdapter: this.serverAdapter,
    });

    this.serverAdapter.setBasePath('/bull-board');
    const app = express();
    const BULL_BOARD_PORT = process.env.BULL_BOARD_PORT || '3003'
    app.use('/bull-board', this.serverAdapter.getRouter());
    app.listen(BULL_BOARD_PORT, () => {
      logger.verbose(`Bull Board avaliable at http://localhost:${BULL_BOARD_PORT}/bull-board`);
    });
  }
}

export {BullBoardController}
