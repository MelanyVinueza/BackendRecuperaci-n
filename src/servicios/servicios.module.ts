import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servicio } from './services.entity';
import { ServiciosService } from './servicios.service';
import { ServiciosController } from './servicios.controller';
import { Vehiculo } from '../vehiculos/vehiculo.enitity';
import { Cliente } from '../clientes/clientes.entity';
import { Taller } from '../taller/taller.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Servicio, Vehiculo, Cliente, Taller])],
  providers: [ServiciosService],
  controllers: [ServiciosController],
})
export class ServiciosModule {}
