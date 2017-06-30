import { MmnPage } from './app.po';

describe('mmn App', () => {
  let page: MmnPage;

  beforeEach(() => {
    page = new MmnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
