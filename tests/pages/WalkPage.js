import BasePage from '#framework/ui/page/BasePage.js';
import {Label, TextBox, Button} from '#framework/ui/elements/index.js';

export default class SampleApp extends BasePage{
    constructor(page){
        super(new Label(page.getByRole("heading", {name:"Sample App"}), 'Playgroung heading'));
        this.username = new TextBox(page.getByPlaceholder("User Name"), "User name input");
        this.paswd = new TextBox(page.getByPlaceholder("********"), "Passwd input");
        this.login = new Button(page.getByRole("button", {name: "Log In"}), "Login Button");
        this.welcome = new Label(page.locator("#loginstatus"), "Login Status")
    }

    async typeCredentials(user) {
        await this.username.typeText(user);
        await this.paswd.typeText("pwd");
    }

    async clickLogin(){
        await this.login.click();
    }

    async getStatus(){
        return await this.welcome.getText();
    }
}
