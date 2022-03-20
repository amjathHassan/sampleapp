import { NameReversePipe } from './name-reverse.pipe';

describe('NameReversePipe', () => {
  it('create an instance', () => {
    const pipe = new NameReversePipe();
    expect(pipe).toBeTruthy();
  });
});
