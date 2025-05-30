import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  readonly productItems: Locator;
  
  constructor(page: Page) {
    super(page);
    this.productItems = page.locator('.features_items .col-sm-4');
  }

  async selectThirdProduct() {
    const thirdProduct = this.productItems.nth(2);
    await this.clickElement(thirdProduct.locator('a:text("View Product")'));
  }
}