import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicio } from './services.entity';
import { CreateServicioDto } from './dto/create-servicio.dto';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
  ) {}

  // Crear un nuevo servicio
  async create(createServicioDto: CreateServicioDto): Promise<Servicio> {
    const servicio = this.servicioRepository.create(createServicioDto);
    return this.servicioRepository.save(servicio);
  }

  // Obtener todos los servicios
  async findAll(): Promise<Servicio[]> {
    return this.servicioRepository.find();
  }

  // Obtener un servicio por ID
  async findOne(id: number): Promise<Servicio> {
    const servicio = await this.servicioRepository.findOne({
      where: { id },
      relations: ['vehiculo', 'taller', 'cliente'],
    });
    if (!servicio) {
      throw new Error('Servicio not found');
    }
    return servicio;
  }

  // Actualizar un servicio
  async update(
    id: number,
    updateServicioDto: CreateServicioDto,
  ): Promise<Servicio> {
    await this.servicioRepository.update(id, updateServicioDto);
    const servicio = await this.servicioRepository.findOne({ where: { id } });
    if (!servicio) {
      throw new Error('Servicio not found');
    }
    return servicio;
  }

  // Eliminar un servicio
  async remove(id: number): Promise<void> {
    await this.servicioRepository.delete(id);
  }
}
