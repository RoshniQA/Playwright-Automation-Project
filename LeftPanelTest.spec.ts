import {Page,test, expect,Locator} from '@playwright/test';
 import { BaseSetup } from './base/baseSetup';
 import { LeftPanel } from './pages/leftPanel';
import { AdminPage } from './pages/adminPage';

 class LeftPanelTest extends BaseSetup{

override defineTests(): void {
    
    test.describe.serial('left panel test cases' , ()=>{

        test('Verify admin tab', async()=>{
        const leftPanel = new LeftPanel(this.page);
        await leftPanel.clickOnLeftPanelTab('Admin');
        await leftPanel.validateAdminPageVisiblity();

        })


        test('Verify PIM tab', async()=>{
        const leftPanel = new LeftPanel(this.page);
        await leftPanel.clickOnLeftPanelTab('PIM');
        await leftPanel.validatePIMPageVisiblity();

        })

        test('Verify Time tab', async()=>{
        const leftPanel =  new LeftPanel(this.page);
        await leftPanel.clickOnLeftPanelTab('Time');
        await leftPanel.validateTimePageVisiblity();

        })


    });

    
    
}



    
 }
 new LeftPanelTest().register();