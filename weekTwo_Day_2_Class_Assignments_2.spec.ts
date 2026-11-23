// Assignment Steps:  Class Assignment - 2

// // Classroom Activity :
// ----------------------

// Write a Playwright script to perform the following actions on the Salesforce login page:
// 1. Navigate to the Salesforce login page.
// 2. Use different CSS selector strategies (ID, Class, Attribute) to locate the username and password fields.
// 3. Enter sample credentials into the username and password fields.
// 4. Click the login button using a CSS selector.
// https://login.salesforce.com/?login=1&locale=in 
// Sample credentials :
// Username:dilipkumar.rajendran@testleaf.com
// Password: TestLeaf@2025

import { chromium ,test } from "@playwright/test";

test('Use CSS Selector', async({page})=>{

    await page.goto("https://login.salesforce.com/?login=1&locale=in");
    await page.locator("#username").fill("devidutta.mishra.official.47225c0f7ea8@agentforce.com");
    await page.locator("#Login").click();
    await page.locator("#password").fill("Devi@1311");
    await page.locator("#Login").click();

})  