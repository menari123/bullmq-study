import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class TcpClientSerivce implements OnModuleDestroy {
    private client: ClientProxy;

    constructor() {
        const TCP_PORT = parseInt(process.env.TCP_PORT ?? '3001', 10);
        const TCP_HOST = process.env.TCP_HOST ?? '127.0.0.1';

        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: { host: TCP_HOST, port: TCP_PORT}
        });
    }

      // Método envia mensagem sem esperar resposta
    async emit(pattern: any, data: any): Promise<void> {
        this.client.emit(pattern, data); // Fire-and-forget
    }

    async onModuleDestroy() {
        await this.client.close();        
    }
}