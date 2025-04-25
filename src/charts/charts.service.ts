import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album, AlbumDocument } from 'src/albums/albums.schema';
import { Artist, ArtistDocument } from 'src/artists/artists.schema';
import { Song, SongDocument } from 'src/songs/songs.schema';

@Injectable()
export class ChartsService {
  constructor(
    @InjectModel(Artist.name) private artistModel: Model<ArtistDocument>,
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
    @InjectModel(Song.name) private songModel: Model<SongDocument>,
  ) {}

  async getCharts() {
    const topArtists = await this.artistModel
      .find()
      .sort({ followers_count: -1 })
      .limit(10)
      .lean();

    const albums = await this.albumModel.find().lean();
    const songs = await this.songModel.find().lean();

    const albumSongCounts = albums.map((album) => {
      const count = songs.filter((song) => song.album_id === album._id).length;
      return { ...album, songCount: count };
    });

    const topAlbums = albumSongCounts
      .sort((a, b) => b.songCount - a.songCount)
      .slice(0, 10);

    const topSongs = songs.slice(0, 10);

    return {
      topArtists,
      topAlbums,
      topSongs,
    };
  }
}
