import { FrontendRjPage } from './app.po';

describe('frontend-rj App', () => {
  let page: FrontendRjPage;

  beforeEach(() => {
    page = new FrontendRjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
