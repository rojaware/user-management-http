import { PetrGetStartedPage } from './app.po';

describe('petr-get-started App', () => {
  let page: PetrGetStartedPage;

  beforeEach(() => {
    page = new PetrGetStartedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
