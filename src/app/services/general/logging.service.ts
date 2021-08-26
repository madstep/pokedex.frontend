import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

    logError(message: string, stack: string) {
        // enviar logs al servidor
        console.log('LoggingService: ' + message);
    }
}
