import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsString,
  IsNotEmpty,
  validate,
} from 'class-validator';

export class CreateServicioDto {
  @IsDateString()
  @IsNotEmpty()
  fecha_servicio: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  costo: number;

  @IsEnum(['mantenimiento preventivo', 'reparación correctiva', 'revisión técnica'])
  @IsNotEmpty()
  tipo_servicio: 'mantenimiento preventivo' | 'reparación correctiva' | 'revisión técnica';

  @IsNumber()
  @IsNotEmpty()
  kilometraje: number;

  @IsNumber()
  @IsNotEmpty()
  vehiculo_id: number;

  @IsNumber()
  @IsNotEmpty()
  taller_id: number;

  @IsNumber()
  @IsNotEmpty()
  cliente_id: number;
}
