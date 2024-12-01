import { InjectQueue } from "@nestjs/bullmq";
import { Injectable } from "@nestjs/common";
import { Queue } from "bullmq";
import { USER_QUEUE } from "src/config/queues/queues";
import { UserCreateEvent } from "./queue.dto";


@Injectable()
class QueueProducer {
    constructor(
        @InjectQueue(USER_QUEUE) private readonly userQueue: Queue
    ) {}

    createUser(event: UserCreateEvent){
        const job = this.userQueue.add('create', event);
        return job
    }
}

export { QueueProducer }