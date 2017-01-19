import { IStalkFrontendPage } from './app.po';

describe('listify App', function() {
  let page: IStalkFrontendPage;

  beforeEach(() => {
    page = new IStalkFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ist works!');
  });
});
