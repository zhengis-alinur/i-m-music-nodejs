import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { AnnotateDto } from './dto/annotate.input';

@Injectable()
export class AnnotateService {
  private openai: OpenAI;

  constructor(private configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('openAI'),
    });
  }

  async annotate(input: AnnotateDto): Promise<string> {
    const { artist, song, line } = input;

    const prompt = `Song: "${song}" by ${artist}\nLine: "${line}"\n\nExplain the meaning of this line in simple words. In russian.`;

    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Используйте 'gpt-4' при наличии доступа
      messages: [
        {
          role: 'system',
          content: 'You are an assistant that helps interpret song lyrics.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    });

    return response.choices[0].message.content?.trim() || '';
  }

  async annotateStream(
    input: AnnotateDto,
    onData: (chunk: string) => void,
  ): Promise<void> {
    const { artist, song, line } = input;

    const prompt = `Song: "${song}" by ${artist}\nLine: "${line}"\n\nExplain the meaning of this line.`;

    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an assistant that helps interpret song lyrics.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      stream: true,
    });

    for await (const part of response) {
      const content = part.choices[0]?.delta?.content;
      if (content) {
        onData(content);
      }
    }
  }
}
