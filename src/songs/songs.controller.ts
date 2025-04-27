import { Controller, Get, Param } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songsService.findOne(id);
  }

  @Get('/album/:albumId')
  findByAlbum(@Param('albumId') albumId: string) {
    return this.songsService.findByAlbum(albumId);
  }

  @Get('/artist/:artistId')
  findByArtist(@Param('artistId') artistId: string) {
    return this.songsService.findByArtist(artistId);
  }
}
