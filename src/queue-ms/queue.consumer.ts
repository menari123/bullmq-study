import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";
import { USER_QUEUE } from "src/config/queues/queues";
import { UserCreateEvent } from "./queue.dto";


@Processor(USER_QUEUE)
class QueueConsumer extends WorkerHost {
    async process(job: Job<UserCreateEvent, any, string>, token?: string): Promise<any> {
        //create user and send email to job.data.email
        console.log(job)
        return
    }
}

export { QueueConsumer }