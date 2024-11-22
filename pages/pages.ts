import { Page } from "@playwright/test";
import { HomePage } from "./homePage";

export class Pages{
    constructor(page:Page){
        this.homepage = new HomePage(page);
    }

    homepage : HomePage;
}