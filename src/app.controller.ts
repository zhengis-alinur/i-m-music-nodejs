import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ArtistsService } from './artists/artists.service';
import { AlbumsService } from './albums/albums.service';
import { SongsService } from './songs/songs.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly artistsService: ArtistsService,
    private readonly albumsService: AlbumsService,
    private readonly songsService: SongsService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('tops')
  async getTops() {
    const artists = await this.artistsService.bests();
    const albums = await this.albumsService.bests();
    const songs = await this.songsService.bests();

    return {
      artists,
      albums,
      songs,
    };
  }
}
