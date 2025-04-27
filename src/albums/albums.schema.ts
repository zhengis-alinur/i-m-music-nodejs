import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Album {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Artist', required: true })
  artist_id: Types.ObjectId;

  @Prop()
  image_url: string;
}

export type AlbumDocument = Album & Document;
export const AlbumSchema = SchemaFactory.createForClass(Album);
