import {
  test,
  Browser,
  Page,
  BrowserContext,
  TestInfo
} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { TEST_CONFIG } from "../config/test-config";
import { attachment } from "allure-js-commons";

export class BaseSetup {

  protected page!: Page;
  private context!: BrowserContext;

  register(): void {

     this.defineTests();
   

    const self = this;

    test.beforeAll(async ({ browser }) => {
      await self.beforeAll(browser);
    });

    test.beforeEach(async () => {
      await self.beforeEach();
    });

    // Pass testInfo to afterEach
    test.afterEach(async ({}, testInfo) => {
      await self.afterEach(testInfo);
    });

    test.afterAll(async () => {
      await self.afterAll();
    });
  }

  async beforeAll(browser: Browser): Promise<void> {

    console.log("Before All Test Cases");

    this.context = await browser.newContext();
    this.page = await this.context.newPage();

    await this.page.goto(TEST_CONFIG.baseURL);
    await this.page.waitForLoadState("networkidle");

    const login = new LoginPage(this.page);

    await login.enterUsername(TEST_CONFIG.username);
    await login.enterPassword(TEST_CONFIG.password);
    await login.loginButton();
  }

  async beforeEach(): Promise<void> {
    console.log("Before Each Test Case");
  }

  async afterEach(testInfo: TestInfo): Promise<void> {

    console.log("After Each Test Case");

    // Capture screenshot only for failed tests
    if (testInfo.status !== testInfo.expectedStatus) {

      const screenshot = await this.page.screenshot({
        fullPage: true
      });

      await attachment(
        `FAILED - ${testInfo.title}`,
        screenshot,
        "image/png"
      );
    }
  }

  async afterAll(): Promise<void> {

    console.log("After All Test Cases");

    await this.context?.close();
  }

  defineTests(): void {
    // Override in subclass
  }
}