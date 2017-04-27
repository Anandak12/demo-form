import { DemoFormPage } from './app.po';

describe('demo-form App', () => {
  let page: DemoFormPage;

  beforeEach(() => {
    page = new DemoFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
