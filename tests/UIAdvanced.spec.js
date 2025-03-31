const {test,expect}=require('@playwright/test');
const { title } = require('node:process');


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
     
    const mouseHoverButton = page.locator("#mousehover");
    const options =page.locator("div.mouse-hover-content a");
    
    // await page.pause();
    await mouseHoverButton.hover();

      //click on options
    await options.first().click();
    await mouseHoverButton.hover();
    await options.last().click();

    
  

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


test('Switch Tab', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const openTab = page.locator("[href*='qaclickacademy']");

    const[newPage] = await Promise.all(
    [
    context.waitForEvent('page'),
    openTab.click(),
    ])

    await expect(newPage).toHaveTitle(/QAClick Academy - A Testing Academy to Learn, Earn and Shine/);
})

test('Switch Window ', async ({browser})=>{

   const context = await browser.newContext();
   const page = await context.newPage();

   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   const openWindow = page.locator("#openwindow");
   const[newPage] = await Promise.all([
    context.waitForEvent('page'),
    openWindow.click(),
   ])
   await newPage.waitForLoadState();
   await expect(newPage).toHaveTitle(/QAClick Academy - A Testing Academy to Learn, Earn and Shine/);
//---------------------------------------------------------------------------------------------------------

    // Switch to the new page
    await newPage.bringToFront();

    const accessAllCourses = newPage.locator("div[class='button float-left'] a[class='main-btn']");
    await accessAllCourses.click();
    const qaClickAcademytext = newPage.locator("//h1[text()='QA Click Academy']");
    const qaText= await qaClickAcademytext.textContent();
    console.log(qaText);

  // Close the first new page.
  await newPage.close();

  // Close the original page.
  await page.close();

})


test('Dropdown', async ({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

const dropdowns = page.locator("#dropdown-class-example");
const options = page.locator("#dropdown-class-example option");
const dropdownList = page.locator("#dropdown-class-example");

//By Label
await dropdowns.selectOption({label:'Option1'});

// //Visible Text
await dropdowns.selectOption('Option2');

// //By value
await dropdowns.selectOption({value:'option3'});

// //Assertions -1
await expect(options).toHaveCount(4);

// //Assertions -2
// const dropDownOptions = await page.$$('#dropdown-class-example option');
// console.log("Number of Options", dropDownOptions.length);
// await expect(dropDownOptions.length).toBe(4);

//Assertions -3 - value presence
const content = await dropdownList.textContent();
await expect(content.includes('Option1')).toBeTruthy();

//Assertion 4 - presence of value in dropdown using looping
const dropDownOptions = await page.$$('#dropdown-class-example option')
let status=false;
for(const option of dropDownOptions){

    let value = await option.textContent();
    if(value.includes('Option2'))
        {
        status=true;
        break;
    }
}

expect(status).toBeTruthy();
})