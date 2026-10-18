import { Page } from "@playwright/test";

/**
 * Shared holder for the active Page.
 * Access as `pageFixture.page` (a property) — never destructure it,
 * or you'll capture a stale reference from a previous scenario.
 */
export const pageFixture = {
    page: undefined as unknown as Page,
};
