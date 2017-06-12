import { Guesty.ComPage } from './app.po';

describe('guesty.com App', () => {
  let page: Guesty.ComPage;

  beforeEach(() => {
    page = new Guesty.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
