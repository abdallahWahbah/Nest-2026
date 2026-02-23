import { IsString } from "class-validator";

export class CreateMessageDto // dto: Data transfer object
{
    @IsString()
    messageContent: string;
}