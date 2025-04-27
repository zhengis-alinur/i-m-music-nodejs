import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Lyric {
  @Prop({ type: Types.ObjectId, ref: 'Song', required: true })
  song_id: Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  lyrics: string;
}

export type LyricDocument = Lyric & Document;
export const LyricSchema = SchemaFactory.createForClass(Lyric);
