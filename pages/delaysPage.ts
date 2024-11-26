import { Page } from "@playwright/test";
import BasePage from "./basePage";

export class DelaysPage extends BasePage{

private readonly startBtn =this.page.getByRole('button', { name: 'Start' })

    constructor (page:Page){
        super(page)
    }

public async visit(): Promise<void> {
 await this.load()
}    

public async load(): Promise<void> {
    await this.page.goto('/javascript-delays/')
}

public async waitTillLoaded(): Promise<void> {
    
}

public async clickCountdownBtn(): Promise<void> {
    await this.startBtn.click({force:true})
}


}