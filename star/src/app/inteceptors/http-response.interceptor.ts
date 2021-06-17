import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ToastService } from '../services/toast.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(private toast: ToastService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log(event.body)
                event.body.message === undefined ? '' : this.toast.showSuccessToast(event.body.message);
                // event.body.error === undefined ? '' : this.message.error(event.body.error, { nzDuration: 5000 });

            }
            return event;
        }));

    }


}
