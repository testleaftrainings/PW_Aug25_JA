import { test } from "@playwright/test";
import { createResource, fetchResource } from "./apiUtility";

let lname:any

test(`Verification`,async ({page,request}) => {

    await createResource(request)
    lname = await fetchResource(request)

        await page.goto(`https://login.salesforce.com/?locale=in`);

    await page.getByLabel("Username").fill("ravindran.ramdas@testleaf.com"); // normal DOM interaction

 //   await page.getByRole("textbox",{name:"Username"}).fill("ravindran.ramdas@testleaf.com") // accessibility way of interacting with the web elements

    await page.getByRole("textbox",{name:"Password"}).fill("RaviTestleaf#1432")// accessibility way of interacting with the web elements

    await page.getByRole("button",{name:"Log In"}).click();

    await page.waitForTimeout(5000)

    await page.getByTitle("App Launcher",{exact:true}).click();

    await page.getByText("View All",{exact:true}).click();

    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Leads");

    await page.getByText("Leads",{exact:true}).click();

    const search = page.getByPlaceholder("Search this list...")

    await search.fill(lname)
    await search.press('Enter')
    await page.waitForTimeout(3000)
})
