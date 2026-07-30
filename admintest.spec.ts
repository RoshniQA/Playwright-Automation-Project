import { test } from "@playwright/test";
import { AdminPage } from "./pages/adminPage";
import { LeftPanel } from "./pages/leftPanel";
import { BaseSetup } from "./base/baseSetup";
import { RandomDataUtil } from "./utils/RandomDataUtil";
import { PIMPage } from "./pages/PIMPage";
import { defineConfig } from "@playwright/test";
import {feature ,story,severity, label,step } from "allure-js-commons";

class AdminTest extends BaseSetup {

    username: string = RandomDataUtil.string(6);

    override defineTests(): void {

        test.describe.serial("HRM Operation perform", () => {

            test("TestCase-1 | Verify Add User Feature", async () => {

                await feature("User management");
                const leftPanelPage = new LeftPanel(this.page);
                const adminPage = new AdminPage(this.page);

             console.log("User created test case Start");

                await leftPanelPage.adminClick();
                await this.page.waitForTimeout(5000);
                await adminPage.clickOnButton(' Add ');
                await adminPage.selectUserRole();
                await adminPage.selectEmployeeName();
                await adminPage.selectStatus();
                await adminPage.addUsername(this.username);
                await adminPage.addPassword();
                await adminPage.addConfirmPassword();
                await adminPage.clickOnButton(' Save ');


                console.log("User created test case Completed");
            });

            test("TestCase-2 | Verify Search Functionality", async () => {

        console.log("Search Functionality test case Start");

                const leftPanelPage = new LeftPanel(this.page);
                const adminPage = new AdminPage(this.page);

                await leftPanelPage.adminClick();

                await adminPage.searchUser(this.username);
                

                console.log("Search Functionality test case Completed");
            });

            test("TestCase-3 | Verify Edit Functionality", async () => {

            console.log("Edit feature Test case Start");

                const leftPanelPage = new LeftPanel(this.page);
                const adminPage = new AdminPage(this.page);

                await leftPanelPage.adminClick();

                await adminPage.searchUser(this.username);
                await adminPage.editIconClick();
                await adminPage.editUsername();
                await adminPage.clickOnSubmit();

                console.log("Edit feature Test case Completed");
            });


            test("TestCase-4 | Verify PIM Functionality" , async()=>{
 

                console.log("PIM Functionality Test case start");
                const leftPanelPage = new LeftPanel(this.page);
                const pimPage = new PIMPage(this.page);
           
                await leftPanelPage.PIMClick();
                await pimPage.employeeNameClick();
                await pimPage.ClickOnSearch();
            console.log("PIM Functionality Test case completed");


            })
          

        });
    }
}

new AdminTest().register();