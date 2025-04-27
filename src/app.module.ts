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
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('mongoDb'),
      }),
    }),
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
