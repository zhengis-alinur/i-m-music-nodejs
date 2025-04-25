import { Module } from '@nestjs/common';
import { AnnotateService } from './annotate.service';
import { AnnotateController } from './annotate.controller';

@Module({
  providers: [AnnotateService],
  controllers: [AnnotateController],
})
export class AnnotateModule {}
