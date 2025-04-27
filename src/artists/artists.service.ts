import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist, ArtistDocument } from './artists.schema';

@Injectable()
export class ArtistsService {
  constructor(@InjectModel(Artist.name) private model: Model<ArtistDocument>) {}

  findAll() {
    return this.model.find();
  }

  async bests() {
    return this.model.find().sort({ followers_count: -1 }).limit(10);
  }

  findOne(id: string) {
    return this.model.findById(id);
  }
}
