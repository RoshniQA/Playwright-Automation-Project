import {test,expect} from "@playwright/test";

test('css selector',async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com");

const searchResult = page.locator('input[placeholder="Type for hints..."]');
await page.locator('[name="username"]').fill("Admin");
await page.locator('[type="password"]').fill("admin123");
await page.locator('button.oxd-button').click();

//await page.waitForTimeout(5000);

await page.locator("//span[text()='Admin']").click();
// await page.locator("//h5[text()='System Users']//following ::input").nth(0).fill("Riya");
// await page.locator("div.oxd-select-text-input").nth(0).click();
// await page.locator("//span[text()='ESS']").click();
// await searchResult.fill("a");
// await expect(searchResult).toBeVisible(); 

//Add User
await page.locator("//button[text()=' Add ']").click();
await page.locator("div.oxd-select-text-input").nth(0).click();
await page.locator("//span[text()='ESS']").click(); 
await searchResult.fill("a");
await page.waitForTimeout(3000);
await page.locator('.oxd-autocomplete-option').nth(0).click();
await page.locator('div.oxd-select-text-input').nth(1).click();
await page.locator('//span[text()="Enabled"]').click();
await page.locator("input.oxd-input").nth(1).fill("Roshniiii");
await page.locator("input.oxd-input").nth(2).fill("Roshni@123");
await page.locator("input.oxd-input").nth(3).fill("Roshni@123");
await page.locator('[type="submit"]').click();
await page.waitForTimeout(3000);

//Search user
await page.locator("//h5[text()='System Users']//following ::input").nth(0).fill("Roshni");
await page.locator('[type="submit"]').click();
await page.waitForTimeout(6000);




});