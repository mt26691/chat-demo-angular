
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

export class BaseService {
    constructor(protected http: HttpClient) {

    }

    protected Post(url, data): Observable<any> {
        return this.http.post(url, data);
    }

    protected Get(url, params?: HttpParams): Observable<any> {
        return this.http.get(url, { params: params })
    }
}
