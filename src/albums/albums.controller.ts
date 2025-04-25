import { Controller, Get, Param } from '@nestjs/common';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Get()
  findAll() {
    return this.albumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumsService.findOne(id);
  }

  @Get('/artist/:artistId')
  findByArtist(@Param('artistId') artistId: string) {
    return this.albumsService.findByArtist(artistId);
  }
}
