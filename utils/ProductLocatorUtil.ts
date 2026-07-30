import { Page,test,expect,Locator } from "@playwright/test";

export class ProductLocatorUtils{

    page:Page;

    constructor(page:Page){

        console.log("This is constructor");
        this.page=page;
    }
  
    async clickOnLeftPanelTab(tabName: string){
  
     await this.page.waitForTimeout(5000);
     console.log("Click on "+tabName+" tab in left panel");
    await this.page.locator(`//span[text()='${tabName}']`).click();
     await this.page.waitForTimeout(5000);
    }
 
     async validatePageVisiblity(headerName: string){
      
        await this.page.waitForTimeout(5000);
        const isVisible = await this.page.locator(`//h6[text()='${headerName}']`).isVisible();
        console.log('Admin page is visible'+ isVisible);
        await expect(this.page.locator(`//h6[text()='${headerName}']`)).toBeVisible();

     }

     async clickOnButton(buttonName: string){

     await this.page.waitForTimeout(5000);
     console.log("Click on "+buttonName+" tab in left panel");
   // await this.page.locator(`//button[text()='${buttonName}']`).click();
     await this.page.getByRole('button', { name: `${buttonName}` }).click();
     await this.page.waitForTimeout(5000);
     console.log("Button locator works fine");
      }

}