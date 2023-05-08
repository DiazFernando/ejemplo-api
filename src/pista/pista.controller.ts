import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PistaService } from './pista.service';

@Controller('pista')
export class PistaController {
    
    constructor(private pistaService: PistaService){}

    //get para mostrar todas las pistas
    @Get('pistas')
    getPistas():any{
        return this.pistaService.getPistas();
    }

    //get para buscar por ID
    @Get('buscar/:id')
    getPistaByID(@Param('id',ParseIntPipe) id:number):any{
        return this.pistaService.getPistaByID(id);
    
    }


    @Post('crear')
    crearPista(@Body() body:any):any{
        return this.pistaService.crearPista(body);
    }
         
}
