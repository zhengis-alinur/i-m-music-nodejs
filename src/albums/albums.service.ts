import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album, AlbumDocument } from './albums.schema';

@Injectable()
export class AlbumsService {
  constructor(@InjectModel(Album.name) private model: Model<AlbumDocument>) {}

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  findByArtist(artistId: string) {
    return this.model.find({ artist_id: artistId });
  }
}
