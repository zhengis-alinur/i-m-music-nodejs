import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Song, SongDocument } from './songs.schema';
import { ArtistsService } from 'src/artists/artists.service';
import { LyricsService } from 'src/lyrics/lyrics.service';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name) private model: Model<SongDocument>,
    private artistsService: ArtistsService,
    private lyricsService: LyricsService,
  ) {}

  findAll() {
    return this.model.find();
  }

  async bests() {
    return this.model.find().limit(10);
  }

  async findOne(id: string) {
    const song = await this.model.findById(id);

    if (!song) return;

    const artist = await this.artistsService.findOne(
      song?.artist_id.toString(),
    );
    const lyrics = await this.lyricsService.getLyrics(id);

    return {
      ...song.toObject(),
      artistName: artist?.name,
      lyrics: lyrics?.lyrics,
    };
  }

  findByAlbum(albumId: string) {
    return this.model.find({ album_id: new Types.ObjectId(albumId) });
  }

  async findByArtist(artistId: string) {
    return this.model.find({
      artist_id: new Types.ObjectId(artistId),
    });
  }
}
