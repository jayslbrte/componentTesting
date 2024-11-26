import { test, expect } from '@playwright/test';
import { TestScope } from '../testscope';

test('assert delays', async ({ page }) => {
  const tester = new TestScope(page);
  const {homepage, delayspage} = tester.Pages
  await homepage.visit() 
  await delayspage.visit()
  await delayspage.clickCountdownBtn()

  await tester.page.waitForTimeout(11000)
  await expect (page.locator('#delay')).toHaveValue('Liftoff!')
  // await tester.page.click('JavaScript Delays')
  // await tester.page.pause()
  
});


