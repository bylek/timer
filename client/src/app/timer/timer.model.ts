export class Timer {
  id: number;
  start_date: number;
  finish_date: number;

  constructor(json) {
    Object.assign(this, json);
  }
}
