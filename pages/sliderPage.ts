import { Page } from "@playwright/test";
import BasePage from "./basePage";

export class SliderPage extends BasePage{

    private readonly slider = this.page.locator(`[id="slideMe"]`)

    constructor (page:Page){        
        super(page);
        }

    public async visit (): Promise<void>{
      await this.load()
    }

    public async load(): Promise<void>{
        await this.page.goto('/slider/');
    }

    public async waitTillLoaded(): Promise<void> {
        
    }

    public async moveSlider(): Promise<void>{
      const boundingBox = await this.slider.boundingBox()

      if (boundingBox){
        const xOffset = boundingBox.width / 2
        const yOffset = boundingBox.height /2
        
        console.log(`X: ${xOffset}, Y: ${yOffset}`)
        await this.slider.click({x:xOffset, y:yOffset})
        }
         
     }

    
}