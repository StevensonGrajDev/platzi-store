import { HttpModule, HttpService } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

// const API_KEY = '111111';
// const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
  imports: [HttpModule],
  providers: [
    // {
    //   provide: 'API_KEY',
    //   useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    // },
    {
      provide: 'Tasks',
      useFactory: async (http: HttpService) => {
        const req = http.get('https://jsonplaceholder.typicode.com/todos');
        return await lastValueFrom(req);
      },
      inject: [HttpService],
    },
  ],
  exports: [/* 'API_KEY' */ 'Tasks'],
})
export class DatabaseModule {}
