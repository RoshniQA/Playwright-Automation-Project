import { Page,Expect,Locator } from "@playwright/test";

export class LoginPage{
    page: Page;

    constructor(page:Page){

        this.page=page;
        console.log("Constructor");

    }
    async enterUsername(nameValue:string){
    await this.page.locator('[name="username"]').fill("Admin");
    console.log("username enter");

    }
    async enterPassword(passwordValue:string){

        await this.page.locator('[type="password"]').fill("admin123");
        console.log("Enter Password ");
    }

    async loginButton(){

        await this.page.locator('button.oxd-button').click();
        console.log("Button click");
           

    }

}
