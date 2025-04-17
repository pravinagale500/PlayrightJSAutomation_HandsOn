export default class OHRMLoginPage {

    constructor(page){
        this.page=page
        this.usernameLocator = page.locator("input[placeholder='Username']");
        this.passwordLocator = page.locator("input[placeholder='Password']");
        this.loginBtnLocator = page.locator("button[type='submit']");
    }

    async goto(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async ohrmLogin(username,password){
        await this.usernameLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.loginBtnLocator.click();
    }
  
}