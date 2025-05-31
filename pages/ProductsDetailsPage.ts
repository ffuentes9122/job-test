import { Page, Locator, expect } from '@playwright/test';
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
    const quantityNumber = quantity.toString();
    await expect(this.quantityInput).toBeVisible();
    await this.quantityInput.click();
    await this.quantityInput.clear();
    await expect(this.quantityInput).toBeEmpty();
    await this.quantityInput.fill(quantityNumber);
    await expect(this.quantityInput).toHaveValue(quantityNumber);
  }

  async addToCart() {
    await expect(this.addToCartButton).toBeVisible();
    await this.addToCartButton.click();
  }
}