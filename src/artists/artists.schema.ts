import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Artist {
  @Prop({ required: true })
  name: string;

  @Prop([String])
  alternate_names: string[];

  @Prop()
  description: string;

  @Prop({ default: 0 })
  followers_count: number;

  @Prop({
    type: {
      facebook: String,
      instagram: String,
      twitter: String,
    },
    default: {},
  })
  social: Record<string, string>;

  @Prop()
  image_url: string;
}

export type ArtistDocument = Artist & Document;
export const ArtistSchema = SchemaFactory.createForClass(Artist);
