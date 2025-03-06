import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Cliente } from '../clientes/clientes.entity';
import { Servicio } from '../servicios/services.entity';

@Entity()
export class Vehiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  año: number;

  @Column({ unique: true })
  placa: string;

  @Column()
  color: string;

  @Column()
  tipo: string; // automóvil, camión, motocicleta

  @Column()
  odometro: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.vehiculos, { nullable: false })
  cliente: Cliente;

  @OneToMany(() => Servicio, (servicio) => servicio.vehiculo)
  servicios: Servicio[];
}
