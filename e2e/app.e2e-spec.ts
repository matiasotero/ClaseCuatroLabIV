import { EnlacePage } from './app.po';

describe('enlace App', function() {
  let page: EnlacePage;

  beforeEach(() => {
    page = new EnlacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
