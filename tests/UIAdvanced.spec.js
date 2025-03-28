const {test,expect}=require('@playwright/test')


test('Navigations', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.pause();
    await page.goto("https://www.google.com/");
    await page.goBack();
    await page.goForward();

})


test('Hidden Elements', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  
    const hideShowExampleTextBox =  page.locator("[placeholder='Hide/Show Example']");
    const hideButton =  page.locator("#hide-textbox");

    await hideShowExampleTextBox.isVisible();
    await hideButton.click();
    await hideShowExampleTextBox.isHidden();

})


test('Alerts | Pop-ups', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     
    const alertButton = page.locator("#alertbtn");
    const confirmButton = page.locator("#confirmbtn");

    page.on('dialog', dialog=> dialog.dismiss());
    await confirmButton.click();


    // page.on('dialog', dialog=> dialog.accept());
    // await alertButton.click();
})


test('Mouse Hover', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     
    const alertButton = page.locator("#mousehover");
    
    await page.pause();
    await alertButton.hover();
    
    //click on options

})


test('Frames', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     
    const frameLocator =  page.frameLocator("#courses-iframe");
    const lifetimeAccessLocator =  frameLocator.locator("li [href='lifetime-access']");
    await lifetimeAccessLocator.first().click();

    const text =  frameLocator.locator(".text h2");
    console.log(await text.textContent());
    const textVerify = await text.textContent();
    console.log(textVerify.split(" ")[1]);



})

test('Links', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     
    const freeAccessLink = page.locator(".blinkingText");
   
    await freeAccessLink.first().click();

})


test(' @regression Child Windows', async ({browser})=>{


    const context = await browser.newContext();
    const page = await context.newPage();

    // const page2 = context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     
    const freeAccessLink = page.locator("[href*='documents-request']");
    
    const [newPage] = await Promise.all(
    [
    context.waitForEvent('page'),
    freeAccessLink.click(),
     ])

     const text = await newPage.locator('.red').textContent();
     const arrayText = text.split('@');
     const domain = arrayText[1].split(" ")[0];
     console.log(domain);

     const domian2 = domain.split('.');
     const usernameText = domian2[0].split(" ")[0];
     console.log(usernameText);
     newPage.close();

     await page.locator("#username").fill("domain");

})