import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { LocalStorage } from './storage/local.storage';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        if (LocalStorage.Token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${LocalStorage.Token}`
                }
            })
        }

        return next.handle(request)
    }
}