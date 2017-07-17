import { StarWarsSamplePage } from './app.po';

describe('star-wars-sample App', () => {
  let page: StarWarsSamplePage;

  beforeEach(() => {
    page = new StarWarsSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
