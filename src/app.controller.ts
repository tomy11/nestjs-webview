import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  root() {
    return { message: 'this is home page' };
  }

  @Get('/about')
  @Render('about')
  about() {
    return {
      message:
        'this page about An efficient server implies a lower cost of the infrastructure, development',
    };
  }
}
