// src/talleres/talleres.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taller } from './taller.entity';
import { TalleresService } from './taller.service';
import { TalleresController } from './taller.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Taller])],
  providers: [TalleresService],
  controllers: [TalleresController],
})
export class TalleresModule {}
