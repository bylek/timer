import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Http, Response } from '@angular/http';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService extends AbstractService {

  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(http: Http) {
    super(http);
  }

  loggedIn() {
    return tokenNotExpired();
  }

  login(email: string, password: string): Observable<any> {
    let data = {email, password};
    return this.request('post', 'authenticate', data, this.afterAuth);
  }

  register(email: string, password: string, name: string = null): Observable<any> {
    let data = {email, password, name};
    return this.request('post', 'register', data, this.afterAuth);
  }

  afterAuth(res: Response) {
    let json = res.json();
    let token = json && json.token;
    if (token) {
      localStorage.setItem('id_token', token);

      return true;

    } else {
      return json.message;

    }
  }

  getUserData() {
    let token = localStorage.getItem('id_token');
    return this.jwtHelper.decodeToken(token);
  }

  logout(): void {
    localStorage.removeItem('id_token');
  }

}
