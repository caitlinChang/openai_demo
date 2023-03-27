import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async create() {
    const configuration = new Configuration({
      organization: 'org-gMqjfzctc4HUcwEfP4dNjmzn',
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.listEngines();
  }
}
