import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {

    supplyPower(watts: number){
        return `Power service: supplying power ${watts} watts`
    }
}
