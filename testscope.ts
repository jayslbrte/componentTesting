import { Page } from "@playwright/test";
import { Pages } from "./pages/pages";
import { SliderPage } from "./pages/sliderPage";

export class TestScope {
    page : Page;
    constructor (page:Page){
        this.page = page
        this.Pages = new Pages(this.page)
    }

    Pages: Pages
    

    








}