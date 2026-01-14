import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { plainToClass } from 'class-transformer';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Run somethign before a request is handled by handler
    console.log("I'm running before the handler");

    return next.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
        console.log("I'm running before response is sent out", data);
      }),
    );
  }
}
