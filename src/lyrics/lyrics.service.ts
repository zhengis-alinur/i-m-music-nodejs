import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lyric, LyricDocument } from './lyrics.schema';

@Injectable()
export class LyricsService {
  constructor(@InjectModel(Lyric.name) private model: Model<LyricDocument>) {}

  getLyrics(songId: string) {
    return this.model.findOne({ song_id: songId });
  }
}
