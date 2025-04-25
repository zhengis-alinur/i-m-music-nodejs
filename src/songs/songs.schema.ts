import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Song {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  album_id: string;

  @Prop({ required: true })
  artist_id: string;

  @Prop()
  description: string;

  @Prop()
  header_image_url: string;
}

export type SongDocument = Song & Document;
export const SongSchema = SchemaFactory.createForClass(Song);
