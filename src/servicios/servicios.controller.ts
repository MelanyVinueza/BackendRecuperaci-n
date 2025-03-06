import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { Servicio } from './services.entity';

@Controller('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  // Crear un servicio
  @Post()
  create(@Body() createServicioDto: CreateServicioDto): Promise<Servicio> {
    return this.serviciosService.create(createServicioDto);
  }

  // Obtener todos los servicios
  @Get()
  findAll(): Promise<Servicio[]> {
    return this.serviciosService.findAll();
  }

  // Obtener un servicio por ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Servicio> {
    return this.serviciosService.findOne(id);
  }

  // Actualizar un servicio
  @Put(':id')
  update(@Param('id') id: number, @Body() updateServicioDto: CreateServicioDto): Promise<Servicio> {
    return this.serviciosService.update(id, updateServicioDto);
  }

  // Eliminar un servicio
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.serviciosService.remove(id);
  }
}
