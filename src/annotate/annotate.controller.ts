import { Controller, Post, Body, Res } from '@nestjs/common';
import { AnnotateService } from './annotate.service';
import { AnnotateDto } from './dto/annotate.input';
import { Response } from 'express';

@Controller('annotate')
export class AnnotateController {
  constructor(private readonly annotateService: AnnotateService) {}

  @Post()
  annotate(@Body('input') input: AnnotateDto) {
    return this.annotateService.annotate(input);
  }

  @Post('stream')
  async annotateStream(@Body() input: AnnotateDto, @Res() res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    await this.annotateService.annotateStream(input, (chunk) => {
      res.write(chunk);
    });

    res.end();
  }
}
