import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehiculo } from './vehiculo.enitity';

@Injectable()
export class VehiculosService {
  constructor(
    @InjectRepository(Vehiculo)
    private vehiculoRepository: Repository<Vehiculo>,
  ) {}

  findAll(): Promise<Vehiculo[]> {
    return this.vehiculoRepository.find();
  }

  
  

  create(vehiculo: Vehiculo): Promise<Vehiculo> {
    return this.vehiculoRepository.save(vehiculo);
  }

  async findOne(id: number): Promise<Vehiculo> {
    const vehiculo = await this.vehiculoRepository.findOne({ where: { id } });
    if (!vehiculo) {
      throw new NotFoundException(`Vehículo con ID ${id} no encontrado`);
    }
    return vehiculo;
  }

  async update(id: number, datos: Partial<Vehiculo>): Promise<Vehiculo> {
    await this.vehiculoRepository.update(id, datos);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.vehiculoRepository.delete(id);
  }
}
