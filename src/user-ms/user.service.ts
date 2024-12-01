import { Injectable } from "@nestjs/common";
import { UserCreate } from "./user.dto";
import { TcpClientSerivce } from "src/tcp/tcp-client.service";


@Injectable()
export class UserService{
    constructor(private readonly tcpClient: TcpClientSerivce){}

    createUser(user: UserCreate){
        this.tcpClient.emit('createUser', user)
        console.log(user.email)
        return
    }
}