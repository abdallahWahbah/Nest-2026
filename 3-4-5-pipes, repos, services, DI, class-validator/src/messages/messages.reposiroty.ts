import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessagesRepository{
    // we assume that "messages.json" exists with "{}" inside of it
    // structure of "messages.json" should look like that >> {"443":{"randomId":443,"content":"hi theres"},"995":{"randomId":995,"content":"hi theres"}}

    async findOne(id: string){
        let contents = await readFile("messages.json", "utf8");
        let messages = JSON.parse(contents);
        return messages[id];
    }

    async findAll(){
        let contents = await readFile("messages.json", "utf8");
        return JSON.parse(contents);
    }

    async create(message: string){
        let contents = await readFile("messages.json", "utf8");
        const messages = JSON.parse(contents);

        const randomId = Math.floor((Math.random()) * 100);
        messages[randomId] = {id: randomId, content: message};

        await writeFile("messages.json", JSON.stringify(messages));

        return messages;

        /*
        {
            12: {id: 12, content: "asdasd"},
            95: {id: 95, content: "aaaaaaa"},
        }
        */
    }
}