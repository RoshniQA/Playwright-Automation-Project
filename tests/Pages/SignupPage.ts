import {Page,Expect,Locator} from '@playwright/test';
import { RandomData } from '../Utils/RandomData';

export class SignupPage{

page : Page;

constructor(page:Page){

    this.page = page;
    console.log("Constructor");

}

async clickSingup(){

    await this.page.locator("//a[text()=' Signup / Login']").click();

}
async enterUsername(nameValue:String){
    
    await this.page.getByPlaceholder('Name').fill(RandomData.randomeName());
    console.log("UsernameEnter");
    
}

async enterEmail(namePassowrd:String){
    
    await this.page.locator('.signup-form input[name="email"]').fill(RandomData.randomEmails());
    console.log("Enter email");
}

async clickButton(){

    await this.page.locator('//button[text()="Signup"]').click();
    console.log("click submit button");
}

async enterTitle(){

await this.page.locator('//input[@id="id_gender2"]').click();

}
async enterPassword(){

await this.page.locator('//input[@name="password"]').fill("Roshni@123");

}

async enterDOB(){

await this.page.locator('#days').selectOption('11');
await this.page.locator('#months').selectOption('April');
await this.page.locator('#years').selectOption('1994');
}

async firstName(){

await this.page.locator('//input[@id="first_name"]').fill("Roshni");

}
async lastName(){

await this.page.locator('//input[@id="last_name"]').fill("Patwa");

}
async enterAddress(){

await this.page.locator('//input[@name="address1"]').fill("121 bajrang nagar indore");
}

async enterCountry(){

await this.page.locator('//select[@id="country"]').selectOption('India');
}

async enterState(){

await this.page.locator('//input[@id="state"]').fill('Madhya Pradesh')

}
async enterCity(){
    
await this.page.locator('//input[@id="city"]').fill('Indore')

}
async enterZipcode(){
    
await this.page.locator('//input[@id="zipcode"]').fill('452001')

}
async enterMobile(){
    
await this.page.locator('//input[@id="mobile_number"]').fill('9876567887')

}
async createAccount(){

await this.page.locator("//button[text()='Create Account']").click();
}
}