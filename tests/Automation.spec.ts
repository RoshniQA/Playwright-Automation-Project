import {Page,test,expect} from '@playwright/test';
import { SignupPage } from './Pages/SignupPage';
import { RandomData } from './Utils/RandomData';






test('Automation test', async({page})=>{

await page.goto('/');

const signuppage = new SignupPage(page);
const username:string = RandomData.randomeName();
const email: string = RandomData.randomEmails();

await signuppage.clickSingup();

await signuppage.enterUsername(username);

await signuppage.enterEmail(email);

await signuppage.clickButton();

await signuppage.enterTitle();

await signuppage.enterPassword();

await signuppage.enterDOB();
await page.waitForTimeout(2000);
await signuppage.firstName();
await page.waitForTimeout(2000);
await signuppage.lastName();
await page.waitForTimeout(2000);
await signuppage.enterAddress();
await page.waitForTimeout(2000);
await signuppage.enterCountry();
await page.waitForTimeout(2000);
await signuppage.enterState();
await page.waitForTimeout(2000);
await signuppage.enterCity();
await page.waitForTimeout(2000);
await signuppage.enterZipcode();
await page.waitForTimeout(2000);
await signuppage.enterMobile();
await page.waitForTimeout(2000);
console.log("Test Pass12");

})

