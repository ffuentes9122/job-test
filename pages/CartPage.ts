import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.checkoutButton = page.locator('.check_out');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
    // Wait for modal to appear
    await this.page.waitForSelector('#checkoutModal', { state: 'visible' });
  }
}