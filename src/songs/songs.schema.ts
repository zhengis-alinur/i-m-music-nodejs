import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Song {
  @Prop({ required: true })
  title: string;

  @Prop({ type: Types.ObjectId, ref: 'Album', required: true })
  album_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Artist', required: true })
  artist_id: Types.ObjectId;

  @Prop()
  description: string;

  @Prop()
  header_image_url: string;
}

export type SongDocument = Song & Document;
export const SongSchema = SchemaFactory.createForClass(Song);
