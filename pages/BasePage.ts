import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async clickElement(element: Locator) {
    await expect(element).toBeVisible()
    await element.click();
  }

  async fillText(element: Locator, text: string) {
    await element.fill(text);
    await expect(element).toHaveText(text)
  }
}