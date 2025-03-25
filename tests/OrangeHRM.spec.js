const {test,expect}=require('@playwright/test');
const OHRMLoginPage = require("../pages/Orangehrm_Login.spec.js")

test.describe('Orange HRM LOgin Test', ()=>{
test('Login Organe HRM', async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page).toHaveTitle(/OrangeHRM/);

    const username = page.locator("input[placeholder='Username']");
    const password = page.locator("input[placeholder='Password']");
    const loginBtn = page.locator("button[type='submit']");
    // const dasboard = page.locator("oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module");

    await username.fill("Admin");
    await password.fill("admin123");
    await loginBtn.click();
    //await expect(page.getByText('Dashboard')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    page.close();
})

test('TC1', async function(){
//async - it will not follow defined steps.
//await  - to instruct to execute defined steps first one.
//function() -->  => 

})

test('Browser Context', async ({browser})=>{
    //async - it will not follow defined steps.
    //await  - to instruct to execute the step one first 
    const context = await browser.newContext();
    const page =  await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    page.close();
    })


test('Page Context', async ({page})=>{
        //async - it will not follow defined steps.
        //await  - to instruct to execute the step one first 

        // const context = await browser.newContext();
        // const page =  await context.newPage();
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        page.close();
        })

    })
