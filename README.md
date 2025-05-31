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

- Cross-browser support (Chromium, Firefox, WebKit). In this case I used Chromium since is my favorite browser for testing.
- Mobile emulation capabilities. I can setup different devices.
- Auto-wait mechanism reduces flakiness. Also the chance to setup retries when the suite is running in the CI
- Built-in test runner and reporter. I can also setup custom error message to create a different output and feed any data visualitazion tool.
- The TypeScript support. I like to keep consistency in the languages I use. If the web app is written using Angular, my go-to would be to use the same languages for maintenance.
- The code generator that Playwright provides is a very good tool to catch locators in a hierarchical order which is very reliable.
