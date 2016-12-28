import { Injectable } from '@angular/core';
import { AbstractService } from '../shared/abstract.service';
import { AuthHttp } from 'angular2-jwt';
import { Response } from '@angular/http';
import { Timer } from './timer.model';

@Injectable()
export class TimerService extends AbstractService {

  constructor(http: AuthHttp) {
    super(http);
  }

  getTimers() {
    return this.request('get', 'timers', null, (res: Response) => {
      let json = res.json();
      if (json.success) {
        return json.timers.map(function(timer){
          return new Timer(timer);
        });

      }

      return [];
    });
  }

}
