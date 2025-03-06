import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './clientes.entity';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { Vehiculo } from '../vehiculos/vehiculo.enitity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, Vehiculo])],
  providers: [ClientesService],
  controllers: [ClientesController],
})
export class ClientesModule {}
