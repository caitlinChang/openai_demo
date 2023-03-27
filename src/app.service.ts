import { Injectable } from '@nestjs/common';
import {
  Configuration,
  OpenAIApi,
  ListEnginesResponse,
  ConfigurationParameters,
} from 'openai';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async create() {
    const configuration = new Configuration({
      organization: 'org-gMqjfzctc4HUcwEfP4dNjmzn',
      apiKey: '',
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.listEngines();
    console.log(response);
    return 'get right callback';
  }
}
