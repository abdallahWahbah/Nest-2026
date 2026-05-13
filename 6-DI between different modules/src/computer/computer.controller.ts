import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
import { PowerService } from 'src/power/power.service';

@Controller('computer')
export class ComputerController {
    
    constructor(private powerService: PowerService, private cpuService: CpuService, private diskService: DiskService){}

    @Get()
    runComputer(){
        return [
            "Computer Controller: calling PowerService, CpuService and DiskService",
            this.powerService.supplyPower(999),
            this.cpuService.compute(3, 2),
            this.diskService.getDiskData(),
        ];
    }
}
