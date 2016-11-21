import { browser, element, by } from 'protractor';

export class IStalkFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ist-root h1')).getText();
  }
}
