import { Module } from "@nestjs/common"
import { QueueConsumer } from "./queue.consumer";
import { QueueController } from "./queue.controller";
import { QueueProducer } from "./queue.producer";
import { queueConfig, userQueue } from "src/config/queues/queue.config";

@Module({
    imports: [queueConfig, userQueue],
    controllers: [QueueController],
    providers:[QueueConsumer, QueueProducer]
})

export class QueuModule {};