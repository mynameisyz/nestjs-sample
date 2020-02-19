import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { ReportsService } from './reports.service';
import { Report } from './interfaces/report.interface';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  async create(@Body() createReportDto: CreateReportDto) {
    await this.reportsService.create(createReportDto);
  }

  @Get()
  async findAll(): Promise<Report[]> {
    return this.reportsService.findAll();
  }
}
