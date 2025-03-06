import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportesService } from './reportes.service';
import { ReportesController } from './reportes.controller';
import { Servicio } from '../servicios/services.entity';
import { Taller } from '../taller/taller.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Servicio, Taller])],
  controllers: [ReportesController],
  providers: [ReportesService],
})
export class ReportesModule {}
