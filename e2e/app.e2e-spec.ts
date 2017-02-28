import { AngularAgGridBoilerplatePage } from './app.po';

describe('angular-ag-grid-boilerplate App', function() {
  let page: AngularAgGridBoilerplatePage;

  beforeEach(() => {
    page = new AngularAgGridBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
