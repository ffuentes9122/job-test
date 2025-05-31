# Clothing Store Automation Test

## Test Execution

```bash
npm install
npm test
```

## View report output

```bash
npm run report
```

## Test Case Design

```
Preconditions

    Website is accessible at https://automationexercise.com/

Test Steps

    Navigate to homepage

    Go to Products section

    Select third product

    Set random quantity (1-20)

    Add to cart

    Proceed to checkout

Expected Results

    Homepage loads successfully

    Products page loads with items visible

    Product details page displays correct product

    Quantity input updates correctly

    Product added confirmation appears

    Register/Login modal appears at checkout
```

## Framework Justification

**Why Playwright?**

- Cross-browser support (Chromium, Firefox, WebKit)
- Mobile emulation capabilities
- Auto-wait mechanism reduces flakiness
- Built-in test runner and reporter
- Support for multiple viewports in single config
- Excellent TypeScript support
