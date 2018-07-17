import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {
    }

    public getResponse(url: string): Promise<any> {
        return this.http.get(url).toPromise();
    }
}
