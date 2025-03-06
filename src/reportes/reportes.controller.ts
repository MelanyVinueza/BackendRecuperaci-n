import { Controller, Get } from '@nestjs/common';
import { ReportesService } from './reportes.service';

@Controller('reportes')
export class ReportesController {
  constructor(private readonly reportesService: ReportesService) {}

  @Get('/costos-vehiculo')
  async getCostosPorVehiculo() {
    return this.reportesService.costosPorVehiculo();
  }

  @Get('/costos-taller')
  async getCostosPorTaller() {
    return this.reportesService.costosPorTaller();
  }

  @Get('/frecuencia-mantenimiento')
  async getFrecuenciaMantenimiento() {
    return this.reportesService.frecuenciaMantenimiento();
  }
}
