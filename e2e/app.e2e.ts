import { NgExtensionPage } from './app.po';

describe('ng-extension App', function() {
  let page: NgExtensionPage;

  beforeEach(() => {
    page = new NgExtensionPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-extension works!');
  });
});
