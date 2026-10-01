import { Page } from "@playwright/test";

export default class HeaderPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public get eleLoginBtn() {
        const loginBtn = this.page.$("text=Log in");
        if (loginBtn != null) {
            return loginBtn;
        } else throw new Error("No Element")
    }



}