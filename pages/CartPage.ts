import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.checkoutButton = page.locator('.check_out');
  }

  async proceedToCheckout() {
    await expect(this.checkoutButton).toBeVisible();
    await this.checkoutButton.click();
    await this.page.waitForSelector('#checkoutModal', { state: 'visible' });
  }
}