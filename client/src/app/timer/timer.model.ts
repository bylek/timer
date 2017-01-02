export class Timer {
  id: number;
  comment: string;
  start_date: string;
  finish_date: string;

  constructor(json) {
    Object.assign(this, json);
  }

  getTime(): string {
    let finish = Date.now();
    if (this.finish_date) {
      finish = Date.parse(this.finish_date);
    }

    let start = Date.parse(this.start_date);
    let diff = (finish - start) / 1000;

    if (diff < 60) {
      return Math.floor(diff) + 's';
    }

    if (diff < 60 * 60) {
      let minutes = Math.floor(diff / 60);
      let seconds = Math.floor(diff % 60);

      return minutes + 'm ' + seconds + 's';
    }

    let hours = Math.floor(diff / (60 * 60));
    let rest = Math.floor(diff % (60 * 60));
    let minutes = Math.floor(rest / 60);
    let seconds = Math.floor(rest % 60);

    return hours + 'h ' + minutes + 'm ' + seconds + 's';
  }
}
