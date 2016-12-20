export class NgExtensionPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-extension-app h1')).getText();
  }
}
