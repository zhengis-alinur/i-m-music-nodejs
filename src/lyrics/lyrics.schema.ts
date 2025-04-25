import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Lyric {
  @Prop({ required: true })
  song_id: string;

  @Prop()
  title: string;

  @Prop()
  lyrics: string;
}

export type LyricDocument = Lyric & Document;
export const LyricSchema = SchemaFactory.createForClass(Lyric);
