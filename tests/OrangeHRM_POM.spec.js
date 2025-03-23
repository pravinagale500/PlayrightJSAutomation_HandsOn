const{test,expect}=require('@playwright/test')
const OHRMLoginPage = require("../pages/Orangehrm_Login.spec.js")


test('Login To OrangeHRM POM', async ({page}) =>{
    
    const ohrmLoginPage=new OHRMLoginPage(page)

     await ohrmLoginPage.goto();
     await ohrmLoginPage.ohrmLogin('Admin','admin123');
     await page.close();
     
})



