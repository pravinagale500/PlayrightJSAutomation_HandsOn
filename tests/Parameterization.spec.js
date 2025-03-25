const {test,expect}=require('@playwright/test')
const data = JSON.parse(JSON.stringify(require('../resources/loginTestData.json')));


test.beforeEach(async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})

// for(const data of dataset){
// test(`Login Organe HRM ${data.username}`, async ({page})=>{
//     await expect(page).toHaveTitle(/OrangeHRM/);
//     const username = page.locator("input[placeholder='Username']");
//     const password = page.locator("input[placeholder='Password']");
//     const loginBtn = page.locator("button[type='submit']");

//     await username.fill(data.username);
//     await password.fill(data.password);
//     await loginBtn.click();
// });
// }



test('Login Organe HRM', async ({page})=>{
        await expect(page).toHaveTitle(/OrangeHRM/);
        const username = page.locator("input[placeholder='Username']");
        const password = page.locator("input[placeholder='Password']");
        const loginBtn = page.locator("button[type='submit']");
    
        await username.fill(data.username);
        await password.fill(data.password);
        await loginBtn.click();
    });


test.afterEach(async ({page})=>{
    page.close();

 })   
