import { Controller, Get, Param } from '@nestjs/common';
import { LyricsService } from './lyrics.service';

@Controller('lyrics')
export class LyricsController {
  constructor(private readonly lyricsService: LyricsService) {}

  @Get(':songId')
  getLyrics(@Param('songId') songId: string) {
    return this.lyricsService.getLyrics(songId);
  }
}
