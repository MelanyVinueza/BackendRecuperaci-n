import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './clientes.entity';


@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  // Crear un nuevo cliente
  async create(clienteData: Partial<Cliente>): Promise<Cliente> {
    const cliente = this.clienteRepository.create(clienteData);
    return this.clienteRepository.save(cliente);
  }

  // Obtener todos los clientes
  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find({ relations: ['servicios'] });
  }

  // Obtener un cliente por su ID
  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({ where: { id }, relations: ['servicios'] });
    if (!cliente) {
      throw new Error('Cliente not found');
    }
    return cliente;
  }
  // Actualizar un cliente
  async update(id: number, clienteData: Partial<Cliente>): Promise<Cliente> {
    await this.clienteRepository.update(id, clienteData);
    const cliente = await this.clienteRepository.findOne({ where: { id } });
    if (!cliente) {
      throw new Error('Cliente not found');
    }
    return cliente;
  }

  // Eliminar un cliente
  async remove(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }


}
