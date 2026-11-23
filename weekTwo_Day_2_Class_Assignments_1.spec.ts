// Assignment Steps:  Class Assignment - 1

// Launch Browser: Browser - actual browser instance (edge,chrome,firefox)
// context - isolated incognito session
// page - tab inside this context

import { chromium,test } from '@playwright/test';

// manual

test ('launch browser manually', async()=>
{
    let browser = await chromium.launch({headless:false,channel:"chrome"});
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://www.google.com")

})

// page fixture

test('launch browser', async({page})=>{

    await page.goto("https://www.google.com")

})

