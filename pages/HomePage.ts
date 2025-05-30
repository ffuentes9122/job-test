import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly productsLink: Locator;

  constructor(page: Page) {
    super(page);
    this.productsLink = page.locator('a[href="/products"]');
  }

  async navigateToProducts() {
    await this.clickElement(this.productsLink);
  }
}