import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Vehiculo } from '../vehiculos/vehiculo.enitity';
import { Servicio } from '../servicios/services.entity';
@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @Column({ length: 20, unique: true })
  cedula: string;

  @Column({ length: 15, nullable: true })
  telefono: string;

  @Column({ length: 100, unique: true, nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  direccion: string;

  @OneToMany(() => Vehiculo, (vehiculo) => vehiculo.cliente)
  vehiculos: Vehiculo[];

  @OneToMany(() => Servicio, (servicio) => servicio.cliente)
  servicios: Servicio[];
}
