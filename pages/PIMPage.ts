

import { Page,Expect,Locator } from "@playwright/test";
import { RandomDataUtil } from "../utils/RandomDataUtil";

export class PIMPage{

page : Page;
//username: string = RandomDataUtil.string(6);

constructor(page:Page){

        this.page=page;
        console.log("Constructor");

    }

async employeeNameClick(){

await this.page.waitForTimeout(5000);

const searchResult1 = this.page.locator('input[placeholder="Type for hints..."]').first();  
await searchResult1.fill("a");
await this.page.waitForTimeout(5000);
await this.page.locator('.oxd-autocomplete-option').nth(0).click();
}

async ClickOnSearch(){

await this.page.locator('[type="submit"]').click();
await this.page.waitForTimeout(6000);
console.log("AddUser testcase Run")
}


}