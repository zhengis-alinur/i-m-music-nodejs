import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Album, AlbumDocument } from './albums.schema';
import { SongsService } from 'src/songs/songs.service';
import { Song } from 'src/songs/songs.schema';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectModel(Album.name) private model: Model<AlbumDocument>,
    private songsService: SongsService,
  ) {}

  findAll() {
    return this.model.find();
  }

  async bests() {
    return this.model.find().limit(10);
  }

  async findOne(id: string): Promise<(Album & { songs: Song[] }) | null> {
    const [album, songs] = await Promise.all([
      this.model.findById(id),
      this.songsService.findByAlbum(id),
    ]);

    if (album) return { ...album.toObject(), songs };

    return null;
  }

  findByArtist(artistId: string) {
    return this.model.find({ artist_id: new Types.ObjectId(artistId) });
  }
}
