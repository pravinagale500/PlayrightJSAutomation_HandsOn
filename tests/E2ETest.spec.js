const {test,expect}=require('@playwright/test');

const data = JSON.parse(JSON.stringify(require('../resources/loginSauceDemoTest.json')));


test.beforeEach(async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
})


test('Login Test Sauce Demo', async ({page})=>{

    const usernameInput = page.locator("input[placeholder='Username']");
    const passwordInput = page.locator("input[placeholder='Password']");
    const loginBtn = page.locator("input[type='submit']");
    const appLogo = page.locator(".app_logo");
    const appLogoMainPage = page.locator(".login_logo");
    const loginButton = page.getByRole('button', {name:'Login'});
    


    await expect(appLogoMainPage).toBeVisible();
    const appLogoLoginPage =  await appLogoMainPage.textContent();
    console.log(appLogoLoginPage);
    await expect(loginButton).toBeEnabled();
    

    await usernameInput.fill(data.username);
    await passwordInput.fill(data.password);
    await loginBtn.click();

    await expect(appLogo).toBeVisible();
    const AppLogo =  await appLogo.textContent();
    console.log(AppLogo);



})


test.afterEach(async ({page})=>{
page.close();
})