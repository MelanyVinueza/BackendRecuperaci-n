import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehiculo } from './vehiculo.enitity';
import { VehiculosService } from './vehiculos.service';
import { VehiculosController } from './vehiculos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculo])],
  providers: [VehiculosService],
  controllers: [VehiculosController],
})
export class VehiculosModule {}
