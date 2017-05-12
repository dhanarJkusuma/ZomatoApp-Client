import { ZomatoClientPage } from './app.po';

describe('zomato-client App', () => {
  let page: ZomatoClientPage;

  beforeEach(() => {
    page = new ZomatoClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
