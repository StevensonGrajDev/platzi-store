import { Inject, Injectable } from '@nestjs/common';
import config from './config';
import { ConfigType /* ConfigService */ } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    // private config: ConfigService,
    // @Inject('Tasks') private apiTasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    // console.log('🚀 ~ AppService ~ apiTasks:', this.apiTasks);
    // return `Hello World! \n API_KEY:${this.config.get<string>('API_KEY')} \n DATABASE:${this.config.get('DATABASE_NAME')}`;
    return `Hello World! \n API_KEY:${this.configService.apiKey} \n DATABASE:${this.configService.database.name}`;
  }

  getNewRoute(): string {
    return `I'm a NEW route`;
  }
}
