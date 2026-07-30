import {test, expect } from "@playwright/test";

test('signup link',async({page}) =>{

await page.goto("https://in.trip.com/?locale=en-IN&curr=INR");

await page.locator('//span[text()="Secure payment"]//following::input[@class="FyxR4YUkMvSL0LbgT660"]').fill("Bali");



await page.locator('//input[@id="checkInInput"]//self::input').click();

await page.locator("(//span[text()='15'])[1]").click();

await page.locator("(//span[text()='20'])[2]").click();

await page.locator("//span[text()= 'Search']").click();

//await page.waitForTimeout(5000);




}





)