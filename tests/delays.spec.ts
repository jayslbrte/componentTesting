import { test, expect } from '@playwright/test';
import { TestScope } from '../testscope';

test.only('assert delays', async ({ page }) => {
  const tester = new TestScope(page);
  await tester.Pages.homepage.visit()
  await page.getByRole('link', { name: 'JavaScript Delays' }).click();
  await page.getByRole('button', { name: 'Start' }).click();

  await tester.page.waitForTimeout(11000)
  await expect (page.locator('#delay')).toHaveValue('Liftoff!')
  // await tester.page.click('JavaScript Delays')
  // await tester.page.pause()
  
});


