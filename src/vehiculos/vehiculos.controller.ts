import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { Vehiculo } from './vehiculo.enitity';

@Controller('vehiculos')
export class VehiculosController {
  constructor(private readonly vehiculosService: VehiculosService) {}

  @Get()
  findAll() {
    return this.vehiculosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiculosService.findOne(Number(id));
  }

  @Post()
  create(@Body() vehiculo: Vehiculo) {
    return this.vehiculosService.create(vehiculo);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() datos: Partial<Vehiculo>) {
    return this.vehiculosService.update(Number(id), datos);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiculosService.remove(Number(id));
  }
}
