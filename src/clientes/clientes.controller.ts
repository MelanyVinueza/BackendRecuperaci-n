import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Cliente } from './clientes.entity';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  // Crear un nuevo cliente
  @Post()
  async create(@Body() clienteData: Partial<Cliente>): Promise<Cliente> {
    return this.clientesService.create(clienteData);
  }

  // Obtener todos los clientes
  @Get()
  async findAll(): Promise<Cliente[]> {
    return this.clientesService.findAll();
  }

  // Obtener un cliente por su ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cliente> {
    return this.clientesService.findOne(id);
  }

  // Actualizar un cliente
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() clienteData: Partial<Cliente>,
  ): Promise<Cliente> {
    return this.clientesService.update(id, clienteData);
  }

  // Eliminar un cliente
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.clientesService.remove(id);
  }
}
