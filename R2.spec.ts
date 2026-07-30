import {test,expect} from "@playwright/test";

test('css locator',async({page})=>{

//wait for URL navigation 

await page.goto("https://regression2.academiaerp.com/#");
await page.waitForURL("https://regression2.academiaerp.com/#");

//toHaveUrl assertion
await expect(page).toHaveURL(/regression2/);
console.log("To have URL Pass");

await page.waitForLoadState('load');

//await page.waitForTimeout(2000);
//By Contains

const adminTab = page.locator('span.Applicant-text.Administrator-text1');

await page.locator('span.Applicant-text.Administrator-text1').click();
//await page.waitForTimeout(2000);

//toHaveAttributes
await expect(adminTab).toHaveAttribute('class','Applicant-text Administrator-text1');
console.log("To have attribute Pass");

//By tag with Id
await page.waitForSelector('input#username');
await page.locator("input#username").fill("Roshni_Patwa");
//await page.waitForTimeout(2000);
//assertion "toHaveValue"
const usernameEnter = page.locator("input#username");
await expect(usernameEnter).toHaveValue('Roshni_Patwa');
console.log("toHaveValue Pass");


// tag with classname and attribute value
await page.locator('label[for="password"]').type("Roshni@123");
//await page.waitForTimeout(6000);

const passwordEnter = page.locator('label[for="password"]');
await passwordEnter.waitFor({state: "visible"});
await expect(passwordEnter).toHaveText('Password');
console.log("To have Text Pass");


//tagname with classname

//isEnabled assertion
const enabled = await page.locator('.btn#signInBtn').isEnabled();
console.log(enabled);
console.log("isEnabled Pass");

//toBeInabled assertion
const signInButton = page.locator('#signInBtn');
await expect(signInButton).toBeEnabled();
console.log("toBeEnabled Pass");

//await  
await signInButton.click();
await page.locator('#signInBtn').click();
await page.waitForTimeout(3000);

//toBeInabled assertion

console.log("stash");


 





})