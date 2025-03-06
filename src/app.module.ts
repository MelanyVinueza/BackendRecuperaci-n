import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TalleresModule } from './taller/taller.module';
import { ClientesModule } from './clientes/clientes.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { ReportesModule } from './reportes/reportes.module';
import { Cliente } from './clientes/clientes.entity';
import { Vehiculo } from './vehiculos/vehiculo.enitity';
import { Taller } from './taller/taller.entity';
import { Servicio } from './servicios/services.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // tu usuario de PostgreSQL
      password: '12345', // tu contraseña de PostgreSQL
      database: 'vehiculos_db', // la base de datos
      entities: [Cliente, Vehiculo, Taller, Servicio],
      synchronize: true, // Configuración para desarrollo, no usar en producción
    }),
    ClientesModule,
    VehiculosModule,
    TalleresModule,
    ServiciosModule,
    ReportesModule,
  ],
})
export class AppModule {}
