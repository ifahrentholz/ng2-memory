import { Ng2MemoryPage } from './app.po';

describe('ng2-memory App', function() {
  let page: Ng2MemoryPage;

  beforeEach(() => {
    page = new Ng2MemoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
