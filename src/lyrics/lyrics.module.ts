import { Module } from '@nestjs/common';
import { LyricsService } from './lyrics.service';
import { LyricsController } from './lyrics.controller';
import { Lyric, LyricSchema } from './lyrics.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Lyric.name, schema: LyricSchema }]),
  ],
  providers: [LyricsService],
  controllers: [LyricsController],
  exports: [LyricsService],
})
export class LyricsModule {}
