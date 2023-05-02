import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PistaController } from './pista/pista.controller';
import { PistaService } from './pista/pista.service';

@Module({
  imports: [],
  controllers: [AppController, PistaController],
  providers: [AppService, PistaService],
})
export class AppModule {}
