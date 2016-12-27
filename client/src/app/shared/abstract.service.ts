import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

export abstract class AbstractService {

  private apiEndpoint = environment.apiUrl;
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  request(method: string, path: string, data: Object, callback: Function) {
    return this.http[method](this.apiEndpoint + path, data)
      .map(callback)
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Something went wrong')
      });
  }

}
