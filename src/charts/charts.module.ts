import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChartsService } from './charts.service';
import { ChartsController } from './charts.controller';
import { Album, AlbumSchema } from 'src/albums/albums.schema';
import { Artist, ArtistSchema } from 'src/artists/artists.schema';
import { Song, SongSchema } from 'src/songs/songs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Artist.name, schema: ArtistSchema },
      { name: Album.name, schema: AlbumSchema },
      { name: Song.name, schema: SongSchema },
    ]),
  ],
  controllers: [ChartsController],
  providers: [ChartsService],
})
export class ChartsModule {}
