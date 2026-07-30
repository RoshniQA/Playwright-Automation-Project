import { Page,Expect,Locator } from "@playwright/test";
import { RandomDataUtil } from "../utils/RandomDataUtil";
import { ProductLocatorUtils } from "../utils/ProductLocatorUtil";

export class AdminPage extends ProductLocatorUtils{

 constructor(page: Page) {
        super(page);
    }
// page : Page;
// //username: string = RandomDataUtil.string(6);

// constructor(page:Page){

//         this.page=page;
//         console.log("Constructor");

//     }

async clickAddButton(){

    await this.clickOnButton(' Add ');
    await this.page.waitForTimeout(5000);
   // await this.page.locator("//button[text()=' Add ']").click();
   console.log("Get by Role Locator works");

}

async selectUserRole(){

await this.page.locator("div.oxd-select-text-input").nth(0).click();
await this.page.locator("//span[text()='ESS']").click(); 
}

async selectEmployeeName(){
const searchResult = this.page.locator('input[placeholder="Type for hints..."]');  
await searchResult.fill("a");
await this.page.waitForTimeout(5000);
await this.page.locator('.oxd-autocomplete-option').nth(0).click();

}
async selectStatus(){

await this.page.locator('div.oxd-select-text-input').nth(1).click();
await this.page.locator('//span[text()="Enabled"]').click();

}
async addUsername(username : string){

    await this.page.locator("input.oxd-input").nth(1).fill(username);

}

async addPassword(){

    await this.page.locator("input.oxd-input").nth(2).fill("Roshni@123");
}

async addConfirmPassword(){
await this.page.locator("input.oxd-input").nth(3).fill("Roshni@123");

}
async clickSubmitbutton(){

await this.clickOnButton(' Save ');
    await this.page.waitForTimeout(5000);
await this.page.waitForTimeout(6000);
console.log("AddUser testcase Run")
    }

async searchUser(username :string){
    
  
    //await this.page.waitForLoadState('networkidle');{

    const username1 = this.page.locator("input.oxd-input").nth(1);

  //  await username.waitFor({ state: "visible" });

    await username1.fill(username);

    await this.clickOnButton(' Search ');
    await this.page.waitForTimeout(5000);

    await this.page.locator(".oxd-table-body").waitFor();
    await this.clickOnButton(' Reset ');
    await this.page.waitForTimeout(5000);
}
 
async editIconClick(){

   await this.page.locator("i.bi-pencil-fill").first().click();
     await this.page.waitForTimeout(3000);
}

async editUsername(){

    await this.page.locator("input.oxd-input").nth(1).fill(RandomDataUtil.string(6));
   
} 

async clickOnSubmit(){

     await this.clickOnButton(" Save ");
     await this.page.waitForTimeout(5000);
}


}

