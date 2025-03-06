import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicio } from '../servicios/services.entity';
import { Taller } from '../taller/taller.entity';

@Injectable()
export class ReportesService {
  constructor(
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
    @InjectRepository(Taller)
    private readonly tallerRepository: Repository<Taller>,
  ) {}

  // Reporte de costos acumulados por vehículo
  async costosPorVehiculo(): Promise<any[]> {
    return await this.servicioRepository.createQueryBuilder('servicio')
      .select('servicio.vehiculoId', 'vehiculoId')
      .addSelect('SUM(servicio.costo)', 'costoTotal')
      .groupBy('servicio.vehiculoId')
      .getRawMany();
  }

  // Reporte de costos acumulados por taller
  async costosPorTaller(): Promise<any[]> {
    return await this.servicioRepository
      .createQueryBuilder('servicio')
      .select('servicio.tallerId', 'tallerId')
      .addSelect('SUM(servicio.costo)', 'costoTotal')
      .groupBy('servicio.tallerId')
      .getRawMany();
  }

  // Estadísticas de frecuencia de mantenimiento
  async frecuenciaMantenimiento(): Promise<any[]> {
    return await this.servicioRepository
      .createQueryBuilder('servicio')
      .select('servicio.vehiculoId', 'vehiculoId')
      .addSelect('COUNT(servicio.id)', 'frecuencia')
      .groupBy('servicio.vehiculoId')
      .getRawMany();
  }
}
