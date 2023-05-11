import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PistaController } from './pista/pista.controller';
import { PistaService } from './pista/pista.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [],
  controllers: [AppController, PistaController],
  providers: [AppService, PistaService],
})
export class AppModule {}
