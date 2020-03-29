import { Controller, Injectable, Post, Get, Res, Body } from '@nestjs/common';
import { ExcelService } from './excel.service';

@Injectable()
@Controller()
export class ExcelController {
  constructor(private readonly excelService: ExcelService) {}

  @Get('api/writeExcel')
  writeExcel(@Body() excelData: Object, @Res() res) {
    this.excelService.writeEcxcel();
    res.status(201).json({ hello: 'world' });
  }
}
