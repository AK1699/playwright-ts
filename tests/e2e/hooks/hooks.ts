import { createBdd } from "playwright-bdd";
import { pageFixture } from "../fixtures/pageFixture";

const { Before, After } = createBdd();

Before(async ({ page }) => {
    // Capture the per-scenario page into the shared holder.
    pageFixture.page = page;
});

After(async () => {
    // Drop the reference so a leaked use between scenarios fails loudly.
    pageFixture.page = undefined as any;
});
