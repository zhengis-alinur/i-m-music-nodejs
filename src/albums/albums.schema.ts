import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Album {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  artist_id: string;

  @Prop()
  image_url: string;
}

export type AlbumDocument = Album & Document;
export const AlbumSchema = SchemaFactory.createForClass(Album);
