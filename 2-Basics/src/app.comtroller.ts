import { Controller, Get } from "@nestjs/common";

// @Controller() // http://localhost:3000/
@Controller("/app") // http://localhost:3000/app
export class AppController{
    @Get() // http://localhost:3000/app
    getHelloMessage(){
        return "Hello from the other side";
    }

    @Get("/hello2") // http://localhost:3000/app/hello2
    getHelloMessageNumber2(){
        return "HHHHHHHHHHello from the other side"
    }
}