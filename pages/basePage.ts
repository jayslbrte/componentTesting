import { Page } from "@playwright/test"
import { TestScope } from "../testscope"

abstract class BasePage {
    protected readonly page: Page

    constructor(page:Page){
        this.page = page

    }

    public abstract load(): void;
    public abstract visit() : void;
    public abstract waitTillLoaded() : Promise<void>;
    public async waitTillIdle() : Promise<void> {
        await this.page.waitForLoadState('load')
    }

public async goToHomePage(): Promise<void>{
    const tester = new TestScope(page)
}    
    
}

export default BasePage;