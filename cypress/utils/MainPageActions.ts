export const FEATURED_EVENTS_LINK_SELECTOR = 'nav a[href="/featured"]'; // TODO: rewrite selector using custom attributes when possible
export const TODAYS_EVENTS_LINK_SELECTOR = 'nav a[href="/today"]'; // TODO: rewrite selector using custom attributes when possible

const NAVIGATION_BAR_SEARCH_INPUT_SELECTOR = 'nav .search input'; // TODO: rewrite selector using custom attributes when possible
const NAVIGATION_BAR_SEARCH_BUTTON_SELECTOR = 'nav .search__button'; // TODO: rewrite selector using custom attributes when possible

export const clickOnLink = (selector: string): void => {
  cy.get(selector).click();
};

export const searchFromNavigationBar = (searchQuery: string): void => {
  cy.get(NAVIGATION_BAR_SEARCH_INPUT_SELECTOR).clear().type(searchQuery);
  cy.get(NAVIGATION_BAR_SEARCH_BUTTON_SELECTOR).click({
    waitForAnimations: true,
  });
};
