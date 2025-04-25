import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album } from 'src/albums/albums.schema';
import { Artist } from 'src/artists/artists.schema';
import { Song } from 'src/songs/songs.schema';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Artist.name) private artists: Model<any>,
    @InjectModel(Album.name) private albums: Model<any>,
    @InjectModel(Song.name) private songs: Model<any>,
  ) {}

  async search(q: string) {
    const regex = new RegExp(q, 'i');
    const [artists, albums, songs] = await Promise.all([
      this.artists.find({ name: regex }),
      this.albums.find({ name: regex }),
      this.songs.find({ title: regex }),
    ]);
    return { artists, albums, songs };
  }
}
