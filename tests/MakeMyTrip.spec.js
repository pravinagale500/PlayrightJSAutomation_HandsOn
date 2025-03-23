const {test,expect} = require('@playwright/test')


test.only('MakeMyTrip Flights', async ({page})=>{

    await page.goto("https://www.makemytrip.com/");

   // Expect a title "to contain" a substring.
    const pageTitle = await expect(page).toHaveTitle(/MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday/);
    console.log(pageTitle);

    const fromCityName = "Mumbai, India";
    const toCityName = "Bengaluru, India";
    const dayPickerDay = "Fri Mar 21 2025";
    const dayPickerReturnDay = "Sat Mar 22 2025";
    const closeModal =page.locator("span.commonModal__close");
    const fromCityLocator = page.locator("#fromCity");
    const fromInputLocator= page.locator("input[placeholder='From']");
    const fromCities = page.locator("//p[text()='"+fromCityName+"']");
    const toCityLocator = page.locator("#toCity");
    const toInputLocator= page.locator("input[placeholder='To']");
    const toCities = page.locator("//p[text()='"+toCityName+"']");
    const dayPicker = page.locator("(//div[@class='DayPicker'])[1]");
    const dayPickerDayLocator = page.locator("DayPicker-Day DayPicker-Day--start DayPicker-Day--selected DayPicker-Day--today");
    const tapOnReturnDate = page.locator("p.latoBlack.font12.greyText.lineHeight16")
    const dayPickerDayReturnLocator = page.locator("div[aria-label='"+dayPickerReturnDay+"'] p:nth-child(1)");

    const travellersLocator = page.locator("span[class='appendRight10']");
    const adultsLocator =page.locator("li[data-cy='adults-2']")
    const applyBtnLocator = page.getByRole('button', {name:'APPLY'});
    const searchBtnLocator = page.locator("a.primaryBtn.font24.latoBold.widgetSearchBtn");

    const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
   
    // await page.fill("//div[@class='DayPicker-Day DayPicker-Day--selected DayPicker-Day--today']", today);
    // const futureDate = new Date();
    // futureDate.setDate(futureDate.getDate() + 7); // Add 7 days
    //  const formattedDate = futureDate.toISOString().split('T')[0];
    //    await page.fill("//div[@class='DayPicker-Day DayPicker-Day--selected DayPicker-Day--today']", formattedDate);

    //close modal
    await closeModal.click();
    //Select from city
    await fromCityLocator.click();
    await fromInputLocator.fill(fromCityName);
    await fromCities.click();
    //Select to city
    await toCityLocator.click();
    await toInputLocator.fill(toCityName);
    await toCities.click();

    await dayPicker.isVisible();
    //SelectFromDate
    await dayPickerDayLocator.click();
    
    //SelectReturnDate
    await tapOnReturnDate.click();
    await dayPickerDayReturnLocator.click();
    //Select travellers
    await travellersLocator.click();
    await adultsLocator.click();
    await applyBtnLocator.click();

    //click on Search button
    // await page.waitForSelector(searchBtnLocator);
    await searchBtnLocator.click();

   //close the page
    page.close();


    
})