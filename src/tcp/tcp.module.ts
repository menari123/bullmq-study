import { Module } from "@nestjs/common";
import { TcpClientSerivce } from "./tcp-client.service";

@Module({
    providers:[TcpClientSerivce],
    exports:[TcpClientSerivce]
})

export class TcpModule{}