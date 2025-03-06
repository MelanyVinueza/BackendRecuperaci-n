import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Vehiculo } from '../vehiculos/vehiculo.enitity';
import { Cliente } from '../clientes/clientes.entity';
import { Taller } from '../taller/taller.entity';

@Entity('servicios')
export class Servicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha_servicio: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  costo: number;

  @Column({ 
    type: 'enum', 
    enum: [
      'mantenimiento preventivo', 
      'reparación correctiva', 
      'revisión técnica'
    ] 
  })
  tipo_servicio: 
    | 'mantenimiento preventivo'
    | 'reparación correctiva'
    | 'revisión técnica';

  @Column()
  kilometraje: number;

  // Relación con la entidad Vehiculo
  @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.servicios, { nullable: false })
  @JoinColumn({ name: 'vehiculo_id' })
  vehiculo: Vehiculo;

  // Relación con la entidad Taller
  @ManyToOne(() => Taller, (taller) => taller.servicios, { nullable: false })
  @JoinColumn({ name: 'taller_id' })
  taller: Taller;

  // Relación con la entidad Cliente
  @ManyToOne(() => Cliente, (cliente) => cliente.servicios, { nullable: false })
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;
}
