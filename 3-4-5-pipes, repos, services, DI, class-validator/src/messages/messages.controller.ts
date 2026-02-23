import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    // we assume that "messages.json" exists with "{}" inside of it
    // structure of "messages.json" should look like that >> {"443":{"randomId":443,"content":"hi theres"},"995":{"randomId":995,"content":"hi theres"}}

    constructor(private messagesService: MessagesService){}

    @Get()
    async listMessages(){

        const messages = await this.messagesService.findAll();

        return {
            mainTitle: "All messages",
            messages: messages
        };
    }

    @Get("/:id")
    async getMessage(@Param("id") id: string){
        
        const message = await this.messagesService.findOne(id);

        if(!message){
            throw new NotFoundException("Message not found");
        }

        return {
            mainTitle: "one message",
            paramId: id,
            message
        };
    }

    @Post()
    async createMessage(@Body() body: CreateMessageDto){

        const messages = await this.messagesService.createMessage(body.messageContent);

        return {
            mainTitle: "posting",
            bodyData: body,
            messages
        }
    }
}
