import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PistaService } from './pista.service';

@Controller('pista')
export class PistaController {
    
    constructor(private pistaService: PistaService){}

    @Get('pistas')
    getPistas():any{
        return this.pistaService.getPistas();
    }

    @Get('buscar/:id')
    getPistaByID(@Param('id',ParseIntPipe) id:number):any{
        return this.pistaService.getPistaByID(id);
    
    }
}
