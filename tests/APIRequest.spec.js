const {test,expect,request} = require ('@playwright/test');
// const loginPayload = require('../resources/loginPayload.json');
const loginPayload = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
let token;



test.beforeAll(async () =>{
const apiContext = await request.newContext();
const loginResponse = await apiContext.post("https://rahulshettyacademy.com/client/auth/login",
{
     data: loginPayload
});

expect(loginResponse.ok).toBeTruthy();
const loginResponseBody = await loginResponse.json();
token = await loginResponseBody.token;
console.log(token);
});



test("Login Test", async ({page})=>{

page.addInitScript(value=>
{
  window.localStorage.setItem('token', value)

},token);

    await page.goto('https://rahulshettyacademy.com/client');
    // await page.getByPlaceholder("email@example.com").fill(email);
    // await page.getByPlaceholder("enter your passsword").fill('Iamking@000');
    // await page.getByRole("button",{name: 'Login'}).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();
});