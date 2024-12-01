import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreate } from "./user.dto";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    healthCheck(){
        return
    }

    @Post()
    createUser(@Body() user: UserCreate){
        this.userService.createUser(user);
        return
    }

}