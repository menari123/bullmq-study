import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TcpModule } from "src/tcp/tcp.module";

@Module({
    imports: [TcpModule],
    controllers: [UserController],
    providers: [UserService]
})

export class UserModule {};