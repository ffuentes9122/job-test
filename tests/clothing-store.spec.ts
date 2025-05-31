import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductsPage } from '../pages/productsPage';
import { ProductsDetailsPage } from '../pages/ProductsDetailsPage';
import { CartPage } from '../pages/cartPage';
import { DataGenerator } from '../utils/dataGenerator';
import { BASE_URL } from '../utils/constants';

test.describe('Clothing Store User Flow', () => {
  test('Complete checkout flow for third product', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productDetailsPage = new ProductsDetailsPage(page);
    const cartPage = new CartPage(page);

    // Step 1: Navigate to website
    await homePage.navigateTo(BASE_URL);
    await expect(page).toHaveTitle('Automation Exercise');

    // Step 2: Go to Products section
    await homePage.navigateToProducts();
    await expect(page).toHaveURL(/products/);

    // Step 3: Select third product
    await productsPage.selectThirdProduct();
    await expect(page).toHaveURL(/product_details/);

    // Step 4: Enter random quantity for the third product
    const quantity = DataGenerator.getRandomQuantity();
    await productDetailsPage.setQuantity(quantity);

    // Step 5: Add to cart
    await productDetailsPage.addToCart();
    
    // Handle the success modal
    await page.getByRole('button', { name: 'Continue Shopping' }).waitFor();
    await page.getByText('View Cart').click();

    // Step 6: Proceed to checkout
    await cartPage.proceedToCheckout();
    
    // Verify register/login modal appears
    await expect(page.getByText('Register / Login').last()).toBeVisible();
  });
});