const {test,expect}=require('@playwright/test');

const data = JSON.parse(JSON.stringify(require('../resources/loginSauceDemoTest.json')));


test.beforeEach(async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const usernameInput = page.locator("input[placeholder='Username']");
    const passwordInput = page.locator("input[placeholder='Password']");
    const loginBtn = page.locator("input[type='submit']");
    await usernameInput.fill(data.username);
    await passwordInput.fill(data.password);
    await loginBtn.click();
    page.on('dialog', dialog=> dialog.accept());
})


// test('Login Test Sauce Demo', async ({page})=>{

//     const usernameInput = page.locator("input[placeholder='Username']");
//     const passwordInput = page.locator("input[placeholder='Password']");
//     const loginBtn = page.locator("input[type='submit']");
//     const appLogo = page.locator(".app_logo");
//     const appLogoMainPage = page.locator(".login_logo");
//     const loginButton = page.getByRole('button', {name:'Login'});

//     const loginCreds = page.locator(".login_credentials");
//     const loginPwd = page.locator(".login_password");
    


//     await expect(appLogoMainPage).toBeVisible();
//     const appLogoLoginPage =  await appLogoMainPage.textContent();
//     console.log(appLogoLoginPage);
//     await expect(loginButton).toBeEnabled();
//     const allLoginCreds =  await loginCreds.textContent();
//     console.log(allLoginCreds);
//     const allLoginPwd =  await loginPwd.textContent();
//     console.log(allLoginPwd);

    

//     await usernameInput.fill(data.username);
//     await passwordInput.fill(data.password);
//     await loginBtn.click();

//     page.on('dialog', dialog=> dialog.accept());
//     await expect(appLogo).toBeVisible();
//     const AppLogo =  await appLogo.textContent();
//     console.log(AppLogo);

    
//     // try {
//     //     if (data && data.username) {
//     //       await usernameInput.fill(data.username);
//     //       console.log("Username filled successfully.");
//     //     } else {
//     //       console.warn("Username data is missing or invalid.");
//     //       // Handle the missing username case (e.g., throw an error, log a warning)
//     //       return false; // Indicate failure
//     //     }
    
//     //     if (data && data.password) {
//     //       await passwordInput.fill(data.password);
//     //       console.log("Password filled successfully.");
//     //     } else {
//     //       console.warn("Password data is missing or invalid.");
//     //       // Handle the missing password case
//     //       return false; // Indicate failure
//     //     }
    
//     //     return true; // Indicate success
//     //   } catch (error) {
//     //     console.error("Error filling credentials:", error);
//     //     // Handle the error (e.g., throw a custom error, report to test framework)
//     //     return false; // Indicate failure
//     //   }
//     // }
    
  

//     // if(loginBtn.isVisible()){
//     //     await loginBtn.click();
//     //     console.log("Login button is clicked.");

//     // } 
//     // else {
//     //      console.log("Failed to click on Login button.");
//     //     }
    

    
//     // try {
//     //     await expect(appLogo).toBeVisible();
//     //     const AppLogoText = await appLogo.textContent();
//     //     console.log("App Logo Text: ", AppLogoText);
    
//     //     if (AppLogoText) { 
//     //       console.log("App Logo text content exists.");
//     //       if (AppLogoText === "Swag Labs") { 
//     //         console.log("App Logo text matches the expected value.");
//     //       } else {
//     //         console.log("App Logo text does not match the expected value.");
//     //       }
//     //     } else {
//     //       console.log("App Logo text content is empty or null.");
          
//     //     }
    
//     //   } catch (error) {
//     //     console.error("App Logo visibility or text retrieval failed:", error);
       
//     //   }

// })
test('Add To cart', async({page})=>{

    const addToCartBtn = page.locator("#add-to-cart-sauce-labs-backpack");
    const removeAddToCartBtn = page.locator("#remove-sauce-labs-backpack"); // Assuming this is the correct ID
  
    // Use page.locator() to get all matching elements, then use .all() to get an array
    const inventoryNameLocators = page.locator('.inventory_item_name[data-test="inventory-item-name"]');
    const inventoryPriceLocators = page.locator('.inventory_item_price[data-test="inventory-item-price"]');
    const cartLink = page.locator(".shopping_cart_link");
    const continueShoopingBtn =page.locator("#continue-shopping");
    const checkoutBtn = page.locator("#checkout");
    const cancelBtn = page.locator("#cancel");
    const continueBtn = page.locator("#continue");
    const firstNameInput = page.locator("#first-name");
    const lastNameInput = page.locator("#last-name");
    const zipPostalCodeInput = page.locator("#postal-code");
    const finishBtn = page.locator("#finish");

    const paymentInfoLabel =page.locator("payment-info-label");
    const paymentInfoValue =page.locator("payment-info-value");
    const shippingInfoLabel =page.locator("shipping-info-label");
    const shippingInfoValue =page.locator("shipping-info-valuel");
    const totalInfoLabel =page.locator("total-info-label");
    const subTotalLabel =page.locator("subtotal-label");
    const taxLabel =page.locator("tax-label");
    const totalLabel =page.locator("total-label");

    const thankYouText = page.locator(".complete-header");
    const yourOrderText= page.locator(".complete-text");

    const backToHomeBtn =page.locator("#back-to-products");
  
    const inventoryNames = [];
    const inventoryPrices = [];
    const targetInventoryName = "Sauce Labs Backpack"; 
    let foundTarget = false; // Flag to track if the target item is found
  
    // Get all matching elements as an array of ElementHandles
    const nameElements = await inventoryNameLocators.all();
    const priceElements = await inventoryPriceLocators.all();
  
    // Iterate through the price elements and extract the text
    for (const element of priceElements) {
      const priceText = await element.textContent();
        inventoryPrices.push(priceText.trim());
    }
     // Log the array of inventory prices to the console
     console.log("Inventory Prices:", inventoryPrices);
  
    
     // Iterate through the name elements and collect all names
  for (const element of nameElements) {
    const nameText = await element.textContent();
    const trimmedName = nameText.trim();
    inventoryNames.push(trimmedName); // Add all names to the array
    console.log("Found Inventory Names:", trimmedName); // Print each inventory name

    // Check if the current name matches the target
    if (trimmedName === targetInventoryName) {
      console.log(`Found the element with the text '${targetInventoryName}'.`);
      await addToCartBtn.click();
      console.log(`${targetInventoryName} Add to Cart Button is Clicked`);
      foundTarget = true;
      // We don't break here if we want to list all names first
    }
  }

  // Log the array of inventory names to the console after listing all
  console.log("All Inventory Names:", inventoryNames);
  

  if (foundTarget) {
    await expect(removeAddToCartBtn).toBeVisible();
  } else {
    console.log(`Target inventory item '${targetInventoryName}' not found on the page.`);
  }

   //Cart Page
    await cartLink.click();
    await expect(removeAddToCartBtn).toBeVisible();
    await expect(continueShoopingBtn).toBeVisible();
    await expect(checkoutBtn).toBeVisible();

    for (const element of nameElements) {
        const nameText = await element.textContent();
        const trimmedName = nameText.trim();
    // Check if the current name matches the target
      if (trimmedName === targetInventoryName) {
        console.log(`Found the element with the text '${targetInventoryName}'.`);
        if (foundTarget) {
            await expect(removeAddToCartBtn).toBeVisible();
            await checkoutBtn.click();
            console.log(`Clicked on Checkout Button`);
          } else {
            console.log(`Target inventory item '${targetInventoryName}' not found on the page.`);
            console.log(`Fail to Click on Checkout Button`);
          }
        foundTarget = true;
        break;
      }
    }

    await expect(cancelBtn).toBeVisible();
    await expect(continueBtn).toBeVisible();

   await firstNameInput.fill(data.firstname);
   await lastNameInput.fill(data.lastname);
   await zipPostalCodeInput.fill(data.postalcode);
   await continueBtn.click();

        // console.log(await paymentInfoLabel.textContent());
        // console.log(await paymentInfoValue.textContent());
        // console.log(await shippingInfoLabel.textContent());
        // console.log(await shippingInfoValue.textContent());
        // console.log(await totalInfoLabel.textContent());
        // console.log(await subTotalLabel.textContent());
        // console.log(await taxLabel.textContent());
        // console.log(await totalLabel.textContent());
   

   for (const element of nameElements) {
    const nameText = await element.textContent();
    const trimmedName = nameText.trim();
// Check if the current name matches the target
  if (trimmedName === targetInventoryName) {
    console.log(`Found the element with the text '${targetInventoryName}'.`);
    if (foundTarget) {
        await expect(finishBtn).toBeVisible();
        await finishBtn.click();
        console.log(`Clicked on Finish Button`);
      } else {
        console.log(`Target inventory item '${targetInventoryName}' not found on the page.`);
        console.log(`Fail to Click on Finish Button`);
      }
    foundTarget = true;
    break;
  }
}

   
await expect(backToHomeBtn).toBeVisible();
await expect(thankYouText).toBeVisible();
await expect(yourOrderText).toBeVisible();


  })

       




test.afterEach(async ({page})=>{
page.close();
})