import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsDetailsPage extends BasePage {
  readonly quantityInput: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    super(page);
    this.quantityInput = page.locator('#quantity');
    this.addToCartButton = page.locator('button.cart');
  }

  async setQuantity(quantity: number) {
    await this.quantityInput.click();
    await this.quantityInput.fill(''); // Clear existing value
    await this.quantityInput.fill(quantity.toString());
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}