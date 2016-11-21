import { IStalkFrontendPage } from './app.po';

describe('i-stalk-frontend App', function() {
  let page: IStalkFrontendPage;

  beforeEach(() => {
    page = new IStalkFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ist works!');
  });
});
