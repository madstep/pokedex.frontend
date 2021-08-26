import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';
import { ServerInterceptor } from './server.interceptor';
import { ServerErrorInterceptor } from './server-error.interceptor';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './global-error-handler';

export const httpInterceptorProviders = [
  { provide: ErrorHandler, useClass: GlobalErrorHandler },
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true },
  //{ provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
];
