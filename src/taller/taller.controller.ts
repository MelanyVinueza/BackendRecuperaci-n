// src/talleres/talleres.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TalleresService } from './taller.service';
import { Taller } from './taller.entity';

@Controller('talleres')
export class TalleresController {
  constructor(private readonly talleresService: TalleresService) {}

  // Obtener todos los talleres
  @Get()
  async findAll(): Promise<Taller[]> {
    return this.talleresService.findAll();
  }

  // Crear un nuevo taller
  @Post()
  async create(@Body() tallerData: Partial<Taller>): Promise<Taller> {
    return this.talleresService.create(tallerData);
  }

  // Obtener un taller por su ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Taller> {
    return this.talleresService.findOne(id);
  }

  // Actualizar un taller
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() tallerData: Partial<Taller>,
  ): Promise<Taller> {
    return this.talleresService.update(id, tallerData);
  }

  // Eliminar un taller
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.talleresService.remove(id);
  }
}
