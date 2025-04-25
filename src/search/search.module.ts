import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { Album, AlbumSchema } from 'src/albums/albums.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Artist, ArtistSchema } from 'src/artists/artists.schema';
import { Song, SongSchema } from 'src/songs/songs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Album.name, schema: AlbumSchema },
      { name: Song.name, schema: SongSchema },
      { name: Artist.name, schema: ArtistSchema },
    ]),
  ],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
