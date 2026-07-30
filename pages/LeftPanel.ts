import { Page,Locator,expect } from "@playwright/test";
import { ProductLocatorUtils } from "../utils/ProductLocatorUtil";

export class LeftPanel extends ProductLocatorUtils {

     constructor(page: Page) {
        super(page);
    }

    // page : Page;

    // constructor(page:Page){

    //     this.page=page;
    //     console.log("Constructor");

    // }

async adminClick(){
    
   await this.clickOnLeftPanelTab('Admin');
   // await this.page.locator("//span[text()='Admin']").click();
}

async validateAdminPageVisiblity(){

      
    const isVisible = await this.page.locator("//h6[text()='Admin']").isVisible();
      console.log('Admin page is visible'+ isVisible );   // true or false.  
      await expect(this.page.locator("//h6[text()='Admin']")).toBeVisible();
}



async PIMClick(){

    await this.clickOnLeftPanelTab('PIM');
   // await this.page.locator("//span[text()='PIM']").click();

}

async validatePIMPageVisiblity(){

       
    const isVisible = await this.page.locator("//h6[text()='PIM']").isVisible();
      console.log('Admin page is visible'+ isVisible );   // true or false.  
      await expect(this.page.locator("//h6[text()='PIM']")).toBeVisible();
}

async clickOnTime(){

    await this.clickOnLeftPanelTab('Time');
}

async validateTimePageVisiblity(){

       
    const isVisible = await this.page.locator("//h6[text()='Time']").isVisible();
      console.log('Admin page is visible'+ isVisible );   // true or false.  
      await expect(this.page.locator("//h6[text()='Time']")).toBeVisible();
}


}