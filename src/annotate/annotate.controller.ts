import { Controller, Post, Body } from '@nestjs/common';
import { AnnotateService } from './annotate.service';

@Controller('annotate')
export class AnnotateController {
  constructor(private readonly annotateService: AnnotateService) {}

  @Post()
  annotate(@Body('line') line: string) {
    return this.annotateService.annotate(line);
  }
}
