import { CurrencyRendererPipe } from './currency-renderer.pipe';
// LETTER "F" ADDED AT THE BEGINNING OF THE DESCRIBE WORD, it is used for focus.like this it will only run this specific unit test and not the rest.
//it is very useful when you have got many unit test and you just wanna focus in one of them.
fdescribe('CurrencyRendererPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyRendererPipe();
    expect(pipe).toBeTruthy();
  });
  //examples made for exercise of unit testing
  it('Should format USD amounts properly', () => {
    const pipe = new CurrencyRendererPipe();
    expect(pipe.transform(8.00)).toBe('$8');
    expect(pipe.transform(6.553)).toBe('$6.55');
  });
  it('Should format EUR amounts properly', () => {
    const pipe = new CurrencyRendererPipe();
    expect(pipe.transform(8.00, 'EUR', 2)).toBe('€4');
  });
});
