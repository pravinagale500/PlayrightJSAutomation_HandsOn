// const {test,expect,request} = require ('@playwright/test');
// const loginPayload = {username:"Admin",password:"admin123"};
// let token;
  
// test.beforeAll(async ()=>{
//     const apiContext = await request.newContext();
//     const loginResponse1 = await apiContext.post("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
//     {
    
//     data: loginPayload
//     })
    
//     expect(loginResponse1).toBeTruthy();
//     const loginResponseBody = await loginResponse1.json();
//     token = await loginResponseBody.token;
//     console.log(token);
//     })



// test('login Organe HRM', async ({page})=>{
//     page.addInitScript(value=>
//         {
//           window.localStorage.setItem('token', value)
        
//         },token);
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await expect(page).toHaveTitle(/OrangeHRM/);
//     //await expect(page.getByText('Dashboard')).toBeVisible();
//     await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
//     page.close();
// })
