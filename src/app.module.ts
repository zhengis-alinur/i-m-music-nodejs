import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsModule } from './artists/artists.module';
import { LyricsModule } from './lyrics/lyrics.module';
import { AlbumsModule } from './albums/albums.module';
import { SongsModule } from './songs/songs.module';
import { SearchModule } from './search/search.module';
import { AnnotateModule } from './annotate/annotate.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ChartsModule } from './charts/charts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/music_db'),
    ArtistsModule,
    AlbumsModule,
    SongsModule,
    SearchModule,
    AnnotateModule,
    LyricsModule,
    ChartsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
