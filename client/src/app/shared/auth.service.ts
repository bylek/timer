import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Response } from '@angular/http';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService extends AbstractService {

  constructor(http: Http) {
    super(http);
  }

  loggedIn() {
    return tokenNotExpired();
  }

  login(email: string, password: string): Observable<boolean> {
    let data = {email, password};
    return this.request('post', 'authenticate', data, (res: Response) => {
      let token = res.json() && res.json().token;
      if (token) {
        localStorage.setItem('id_token', token);

        return true;
      } else {
        return false;
      }
    });
  }

  logout(): void {
    localStorage.removeItem('id_token');
  }

}
