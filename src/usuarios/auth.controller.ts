import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Usuario } from './usuario.entity';
import { Request as ExpressRequest } from 'express'; // Importamos la interfaz de Express

interface AuthenticatedRequest extends ExpressRequest {
  user?: Usuario;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(body.username, body.password);

    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  getProfile(@Request() req: AuthenticatedRequest) {
    if (!req.user) {
      throw new UnauthorizedException('No autorizado');
    }
    return req.user;
  }
}
