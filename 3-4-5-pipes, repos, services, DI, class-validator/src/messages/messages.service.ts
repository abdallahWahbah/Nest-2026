import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.reposiroty";

@Injectable()
export class MessagesService{
    constructor(private messagesRepo: MessagesRepository){}

    findOne(id: string){
        return this.messagesRepo.findOne(id);
    }

    findAll(){
        return this.messagesRepo.findAll();
    }

    createMessage(message: string){
        return this.messagesRepo.create(message);
    }
}