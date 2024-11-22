import { expect, Page } from "@playwright/test";
import BasePage from "./basePage";

export class HomePage extends BasePage{

    private readonly articleHeader = this.page.locator(`id=post-36`)

    constructor (page:Page){        
    super(page);
    }

    public async visit(): Promise<void> {
        await this.load()
    }

    public async load(): Promise<void>{
        await this.page.goto('/');
        // await this.page.pause()
        await expect(this.articleHeader).toBeVisible()

    }

    public async waitTillLoaded(): Promise<void> {
        
    }
  
}