import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { Logger } from '@nestjs/common';

const logger = new Logger("Main")

const getPorts = () => {
  const TCPPort = parseInt(process.env.TCP_PORT ?? '3001', 10);
  const HTTPPort = parseInt(process.env.HTTP_PORT ?? '3002', 10);

  if (TCPPort === HTTPPort) {
    throw new Error("TCP port and HTTP port must be different");
  }

  return { TCPPort, HTTPPort };
};

async function bootstrap() {
  const { TCPPort, HTTPPort } = getPorts();
  const TCP_HOST = process.env.TCP_HOST ?? '127.0.0.1';

  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: TCP_HOST,
      port: TCPPort,
      retryAttempts: 3,
      retryDelay: 3,
    },
  });

  await app.startAllMicroservices();
  await app.listen(HTTPPort);

  logger.verbose(`TCP listening on port ${TCPPort}`)
  logger.verbose(`HTTP listening on port ${HTTPPort}`)
}
bootstrap();