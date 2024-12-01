import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { QueueProducer } from "./queue.producer";
import { UserCreateEvent } from "./queue.dto";


@Controller()
export class QueueController{
    constructor( private readonly queueProducer: QueueProducer) {}

    @MessagePattern('createUser')
    create(event: UserCreateEvent) {
        return this.queueProducer.createUser(event)
    }
}