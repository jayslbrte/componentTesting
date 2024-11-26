import { Page } from "@playwright/test";
import { HomePage } from "./homePage";
import { SliderPage } from "./sliderPage";
import { DelaysPage } from "./delaysPage";
import { FormFieldPage } from "./formfieldsPage";

export class Pages{
    constructor(page:Page){
        this.homepage = new HomePage(page);
        this.sliderpage = new SliderPage(page)
        this.delayspage = new DelaysPage(page)
        this.formfieldpage = new FormFieldPage(page)
    }

    homepage : HomePage;
    sliderpage: SliderPage
    delayspage : DelaysPage
    formfieldpage: FormFieldPage
}