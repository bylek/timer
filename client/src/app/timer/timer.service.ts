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
      if (json) {
        return json.map(function(timer){
          return new Timer(timer);
        });

      }

      return [];
    });
  }

  stopTimer(timer: Timer) {
    let finishDate = new Date().toISOString();
    return this.updateTimer(timer, {finish_date: finishDate});
  }

  updateTimer(timer: Timer, data: Object) {
    return this.request('patch', `timers/${timer.id}`, data, (res: Response) => {
      let json = res.json();
      if (json) {
          return json;
      }

      return null;
    });
  }

  createTimer(data) {
    return this.request('post', `timers`, data, (res: Response) => {
      let json = res.json();
      if (json) {
        return json;
      }

      return null;
    });
  }

}
