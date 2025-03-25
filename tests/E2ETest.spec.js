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

    const loginCreds = page.locator(".login_credentials");
    const loginPwd = page.locator(".login_password");
    


    await expect(appLogoMainPage).toBeVisible();
    const appLogoLoginPage =  await appLogoMainPage.textContent();
    console.log(appLogoLoginPage);
    await expect(loginButton).toBeEnabled();
    const allLoginCreds =  await loginCreds.textContent();
    console.log(allLoginCreds);
    const allLoginPwd =  await loginPwd.textContent();
    console.log(allLoginPwd);

    

    await usernameInput.fill(data.username);
    await passwordInput.fill(data.password);
    await loginBtn.click();
    await expect(appLogo).toBeVisible();
    const AppLogo =  await appLogo.textContent();
    console.log(AppLogo);
    // try {
    //     if (data && data.username) {
    //       await usernameInput.fill(data.username);
    //       console.log("Username filled successfully.");
    //     } else {
    //       console.warn("Username data is missing or invalid.");
    //       // Handle the missing username case (e.g., throw an error, log a warning)
    //       return false; // Indicate failure
    //     }
    
    //     if (data && data.password) {
    //       await passwordInput.fill(data.password);
    //       console.log("Password filled successfully.");
    //     } else {
    //       console.warn("Password data is missing or invalid.");
    //       // Handle the missing password case
    //       return false; // Indicate failure
    //     }
    
    //     return true; // Indicate success
    //   } catch (error) {
    //     console.error("Error filling credentials:", error);
    //     // Handle the error (e.g., throw a custom error, report to test framework)
    //     return false; // Indicate failure
    //   }
    // }
    
  

    // if(loginBtn.isVisible()){
    //     await loginBtn.click();
    //     console.log("Login button is clicked.");

    // } 
    // else {
    //      console.log("Failed to click on Login button.");
    //     }
    

    
    // try {
    //     await expect(appLogo).toBeVisible();
    //     const AppLogoText = await appLogo.textContent();
    //     console.log("App Logo Text: ", AppLogoText);
    
    //     if (AppLogoText) { 
    //       console.log("App Logo text content exists.");
    //       if (AppLogoText === "Swag Labs") { 
    //         console.log("App Logo text matches the expected value.");
    //       } else {
    //         console.log("App Logo text does not match the expected value.");
    //       }
    //     } else {
    //       console.log("App Logo text content is empty or null.");
          
    //     }
    
    //   } catch (error) {
    //     console.error("App Logo visibility or text retrieval failed:", error);
       
    //   }

})


test.afterEach(async ({page})=>{
page.close();
})