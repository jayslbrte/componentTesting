import { test, expect } from '@playwright/test';
import { TestScope } from '../testscope';

test('assert completion of form', async({page}) => {

    const tester = new TestScope(page)
    const {homepage, formfieldpage} = tester.Pages
    await homepage.visit()
    await formfieldpage.visit()
    await formfieldpage.completeForm('testername', 'test@123','Wine','Green','Yes','test@sample.com');
    await formfieldpage.submitData()

    //add assertion of the pop-up box shown after you submit form here

    
    
});