import { PowerService } from './../power/power.service';
import { Injectable } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService){}

    getDiskData(){
        this.powerService.supplyPower(1000);
        return "Disk Service"
    }
}
