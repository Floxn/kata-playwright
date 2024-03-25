// @ts-check
import {expect, test} from "@playwright/test";

test('kata-1', async ({page}) => {
    await page.goto('/');

    await page.getByText('Wonach suchst Du?', ).click()
    await page.getByPlaceholder('Wonach suchst Du?').fill('Wanderschuhe')
    await page.getByPlaceholder('Wonach suchst Du?').press('Enter')
    await page.locator('#product-list .product-item').first().click()

    await page.getByTestId('available-true').first().click()
    await page.getByTestId('toBasket').click()

    await expect(page.getByTestId('cartItem').first()).toBeVisible()
})