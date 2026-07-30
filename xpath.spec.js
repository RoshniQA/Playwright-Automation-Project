
import { test, expect } from '@playwright/test';



test('get started link', async ({ page }) => {
  await page.goto('https://www.facebook.com/reg/?entry_point=login&next=https%3A%2F%2Fwww.facebook.com%2F');

  // Click the get started link.
  await page.locator('//input[@id="_R_1cl2p4jikacppb6amH1_"]').fill('roshni');
  await page.locator('//*[contains(@id,"_R_1kl2p4jikacppb6amH1_")]').fill('patwa');
  await page.locator("//div[@aria-label='Select day']").click();
  await page.locator("//div[text()=6]").click();
  await page.locator("//div[@aria-label='Select month']").click();
  await page.locator("//div[text()='March']").click();
  await page.locator("//div[@aria-label='Select year']").click();
  await page.locator("//div[text()='1994']").click();
  await page.locator("//span[text()='Select your gender']/ancestor::div[@role='combobox']").click();
  await page.getByRole('option',{name:'Female'}).click();
  await page.locator("//label[text()='Mobile number or email address']").fill("9876545678");
  await page.locator('//input[@id="_R_clap4jikacppb6amH1_"]').fill("Roshni@123");
  await page.locator("//span[text()='Submit']").nth(1).click();
  //await page.locator('//span[text()="Forgotten password?"]//following::span[1]').click();

 //await page.locator("//input[@id='_R_1kl2p4jikacppb6amH1_']/ancestor::label").fill("Roshni")
  console.log("Pass");
  
});
