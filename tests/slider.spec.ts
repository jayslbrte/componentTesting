import { test, expect } from '@playwright/test';
import { TestScope } from '../testscope';

test('testing sliders', async ({page}) => {
    
 const tester = new TestScope(page);
 const {sliderpage, homepage} = tester.Pages
 await homepage.visit()
 await sliderpage.visit()
 await sliderpage.moveSlider()

});