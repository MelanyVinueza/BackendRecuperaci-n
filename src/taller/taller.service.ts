// src/talleres/talleres.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Taller } from './taller.entity';

@Injectable()
export class TalleresService {
  constructor(
    @InjectRepository(Taller)
    private readonly tallerRepository: Repository<Taller>,
  ) {}

  // Crear un nuevo taller
  async create(tallerData: Partial<Taller>): Promise<Taller> {
    const taller = this.tallerRepository.create(tallerData);
    return this.tallerRepository.save(taller);
  }

  // Obtener todos los talleres
  async findAll(): Promise<Taller[]> {
    return this.tallerRepository.find();
  }

  // Obtener un taller por su ID
  async findOne(id: number): Promise<Taller> {
    // Aquí se usa findOneBy
    const taller = await this.tallerRepository.findOneBy({ id });
    if (!taller) {
      throw new Error('Taller no encontrado');
    }
    return taller;
  }


  // Actualizar un taller
  async update(id: number, tallerData: Partial<Taller>): Promise<Taller> {
    await this.tallerRepository.update(id, tallerData);
    const taller = await this.tallerRepository.findOneBy({ id });

    if (!taller) {
      throw new Error('Taller no encontrado');
    }
    return taller;
  }

  // Eliminar un taller
  async remove(id: number): Promise<void> {
    await this.tallerRepository.delete(id);
  }
}
