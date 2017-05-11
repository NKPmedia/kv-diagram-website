import { Untitled2Page } from './app.po';

describe('untitled2 App', () => {
  let page: Untitled2Page;

  beforeEach(() => {
    page = new Untitled2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
