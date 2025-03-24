const {test,expect}=require('@playwright/test')


test('Verify Logo OrangeHrm', async ({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

const logo = await page.locator("//img[@alt='company-branding']");
const boundingBox = await logo?.boundingBox();
if(boundingBox){

    expect(boundingBox.width).toBe(275);
    // expect(boundingBox.height).toBe(53.53125);

}

})


test('Verify Login Button Visual', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    const loginButton =  page.locator("button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button"); // Corrected selector
  

    // Optionally, you can also add assertions about the button's properties.
    const boundingBox = await loginButton?.boundingBox();
    if (boundingBox) {
      // These values may change based on browser and OS. Adjust accordingly or remove if not crucial.
      expect(boundingBox.width).toBeGreaterThan(80); // Adjust tolerance if needed
      expect(boundingBox.height).toBeGreaterThan(30); // Adjust tolerance if needed
    }
  });


test('Confirm logo color', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // const logo = await page.getByAltText('OrgaheHRM');////img[@alt='company-branding']
    const logo = await page.locator("//img[@alt='company-branding']");

    //Get the computed style of the button
    const logoStyle = await logo.evaluate((element) => {
        const style = window.getComputedStyle(element);
        return {
            color:style.color,
        };
    });
    //Assert the background color of the button
    expect(logoStyle.color).toBe("rgb(0, 0, 0)");

})