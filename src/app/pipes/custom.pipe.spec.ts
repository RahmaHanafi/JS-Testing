import { CustomPipe } from './custom.pipe';

describe('CustomPipe', () => {
  const pipe = new CustomPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('test pipe if number is passed return number*2', () => {
    expect(pipe.transform(5)).toBe(10);
  });

  it('test pipe if not number is passed return not a number', () => {
    expect(pipe.transform('rahma')).toEqual('rahma is not a number');
  });
});
