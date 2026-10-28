import {Page,test,expect} from '@playwright/test';

test('Flipkart test', async({page})=>{

await page.goto('https://www.flipkart.com/');
await page.locator("//span[text()='Login']").click();
await page.locator('.b3wTlE').click();
await page.locator("//div[text()='Beauty']").click();
await page.locator('//div[text()="Makeup "]').click();
await page.locator("//div[text()='Nails']").click();
const productname = await page.locator('nZIRY7').allTextContents();
console.log(productname);
})
