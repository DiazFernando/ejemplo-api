import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('calculadora')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sumar/:num1/:num2')
  getSumar(@Param('num1', ParseIntPipe) num1:number,@Param('num2', ParseIntPipe) num2:number):number{
    return this.appService.getSumar(num1, num2);
  }
}
