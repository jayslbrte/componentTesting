import { Page } from "@playwright/test";
import BasePage from "./basePage";

export class FormFieldPage extends BasePage{

private readonly nameField = this.page.getByTestId('name-input')
private readonly password = this.page.locator(`[type='password']`)
private readonly autoQtn = this.page.locator(`[id='automation']`)
private readonly email = this.page.getByTestId('email')
private readonly messageBox = this.page.getByTestId('message')
private readonly submitForm = this.page.getByTestId('submit-btn')

// private readonly checkboxes = this.page.
// private readonly radioBtns = 
// private readonly dropdownfield = 
// private readonly emailField =
// private readonly messagebox = 
// private readonly submitBtn = 

    constructor (page:Page){
    super(page)
}

public async visit():Promise<void>{
    await this.load()
}

public async load(): Promise<void>{
    await this.page.goto('/form-fields/')
}

public async waitTillLoaded(): Promise<void> {
    
}

// public async addValueToField(objectSelect : object, value: string){
//  await this.page.locator(``)
// }

public async completeForm(nameValue: string, passwordValue: string, drink: string, color: string, automation: string, email: string): Promise<void>{
    await this.nameField.fill(nameValue);
    await this.password.fill(passwordValue);
    await this.chooseDrink(drink);
    await this.chooseColor(color)
    await this.autoQtn.selectOption(automation)
    await this.email.fill(email)
    await this.messageBox.fill('random thoughts')
}

public async submitData():Promise<void>{
  await this.submitForm.click({force:true})
}

public async chooseDrink(optionCheckBox: string){
 await this.page.getByRole('checkbox',{ name: `${optionCheckBox}`}).click({force:true})
}

public async chooseColor(optionRadio: string){
    await this.page.getByRole('radio', {name: `${optionRadio}`}).click({force:true})
}


}