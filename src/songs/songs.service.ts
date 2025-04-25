import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song, SongDocument } from './songs.schema';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song.name) private model: Model<SongDocument>) {}

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  findByAlbum(albumId: string) {
    return this.model.find({ album_id: albumId });
  }
}
