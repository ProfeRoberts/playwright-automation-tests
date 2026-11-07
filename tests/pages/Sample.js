import BasePage from '#framework/ui/page/BasePage.js';
import { Label, Button, TextBox } from '#framework/ui/elements/index.js';

export default class SampleApp extends BasePage {
  constructor(page) {
    super(
      new Label(page.getByRole('heading', { name: "Sample App", level: 3 }), 'Sample App Header'),
      'Sample App'
    );
    this.username = new TextBox(page.getByRole("textbox", {name: "User Name"}), "User Name");
    this.password = new TextBox(page.getByPlaceholder("********"), "Password");
    this.loginButton = new Button(page.getByRole("button", {name:"Log In"}), "Log In");
    this.status = new Label(page.locator("#loginstatus"), "Log In status");
  }

  async enterCredentials(user, password) {
    await this.username.typeText(user);
    await this.password.typeText(password);
  }

  async clickLogIn(){
    await this.loginButton.click();
  }

  async checkStatus(){
    return await this.status.getText();
  }
}
