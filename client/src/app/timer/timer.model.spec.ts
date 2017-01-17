import { Timer } from './timer.model';

describe('Timer Model', () => {
  let timer: Timer;

  beforeEach(() => {
    let startDate = new Date(Date.now() - 20 * 1000);
    timer = new Timer({
      id: 1,
      comment: 'test',
      start_date: startDate.toISOString()
    });
  });

  it('should create', () => {
    expect(timer).toBeTruthy();
  });

  it('should return assigned data', () => {
    expect(timer.id).toBe(1);
    expect(timer.comment).toBe('test');
    expect(timer.start_date).toBeDefined();
    expect(timer.finish_date).toBeUndefined();
  });

  it('should return current time 20s', () => {
    let time = timer.getTime();
    expect(time).toBe('20s');
  });

  it('should return current time 10s', () => {
    let finishDate = new Date(Date.now() - 10 * 1000);
    timer.finish_date = finishDate.toISOString();
    expect(timer.getTime()).toBe('10s');
  });
});
