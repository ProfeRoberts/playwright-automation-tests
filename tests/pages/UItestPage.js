import BasePage from '#framework/ui/page/BasePage.js';
import { Label } from '#framework/ui/elements/index.js';

export default class UItestPage extends BasePage {
  constructor(page) {
    super(
      new Label(page.getByRole('heading', { name: /UI Test Automation Playground/i, level: 1 }), 'Main Page Header'),
      'Main Page'
    );
    this.page = page;
    this.navigationLink = (text) => new Label(this.page.getByRole('link', { name: text, exact: true }), `Navigation link: ${text}`);
  }

  async clickNavigationLink(navigationText) {
    await this.navigationLink(navigationText).click();
  }
}
