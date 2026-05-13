import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  // in this section
  // PowerService is used in CpuModule & DiskModule
  // CpuService & DiskService are used in ComputerController
  providers: [PowerService],  // "PowerService" can be accessed only in "PowerModule" unsless it's exported
  exports: [PowerService] 
  // to use "PowerService" into another service like "CpuService"
  // 1- we export the service from "PowerModule" (in which "PowerService" is imported)
  // 2- we import "PowerModule" in "CpuModule" in the imports[]
  // 3- use DI in "CpuService" to access "PowerService"
})
export class PowerModule {}
