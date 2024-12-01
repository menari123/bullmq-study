import { BullModule } from "@nestjs/bullmq";
import { USER_QUEUE } from "./queues";


export const queueConfig = BullModule.forRoot({
    connection: {
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: parseInt(process.env.REDIS_PORT || '6379')
    },
    defaultJobOptions: {
      removeOnComplete: 100,// mantem os ultimos 100 jobs executados com sucesso
      removeOnFail : 1000, // mantem os ultimos 1000 jobs que falharam
      attempts: 3, //retentativa de execucao de jobs apos alguma falha
      backoff: { // configuracao de deplay para retentativa
        type: 'exponential',
        delay: 1000,
      }
    }
  })

export const userQueue = BullModule.registerQueue({
    name: USER_QUEUE,
})