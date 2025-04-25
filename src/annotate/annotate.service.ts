import { Injectable } from '@nestjs/common';
@Injectable()
export class AnnotateService {
  annotate(line: string) {
    return {
      line,
      annotation: `Аннотация к строке: "${line}" (псевдо-ИИ ответ)`,
    };
  }
}
