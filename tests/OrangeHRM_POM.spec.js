const{test,expect}=require('@playwright/test')
const OHRMLoginPage = require("../pages/Orangehrm_Login.spec.js")


test('Login to OrangeHRM POM', async ({page}) =>{
    
    const ohrmLoginPage=new OHRMLoginPage(page)

     await ohrmLoginPage.goto();
     await ohrmLoginPage.ohrmLogin('Admin','admin123');
     await page.close();
     
})



