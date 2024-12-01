import { Module } from "@nestjs/common";
import { userQueue } from "src/config/queues/queue.config";
import { BullBoardController } from "./bull-board.controller";

@Module({
    imports:[userQueue],
    controllers:[BullBoardController]
})

export class BullBoardModule{}