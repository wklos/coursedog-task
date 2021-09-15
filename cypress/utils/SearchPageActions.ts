import { getEventCards } from './EventListActions';

const SEARCH_PAGE_INPUT_SELECTOR = '#main-content #search-input'; // TODO: rewrite selector using custom attributes when possible
const SIDE_NAV_ORG_SELECTION_MENU = '#main-content select#orgSelect'; // TODO: rewrite selector using custom attributes when possible

export const filterByOrganizationFromSearchResults = (
  organization: string,
): void => {
  cy.get(SIDE_NAV_ORG_SELECTION_MENU).select(organization);
};

export const verifyEventCardsContainText = (query: string): void => {
  getEventCards().each((eventCard) => {
    cy.wrap(eventCard).contains(query);
  });
};

export const verifySearchInput = (searchQuery: string): void => {
  cy.get(SEARCH_PAGE_INPUT_SELECTOR)
    .should('be.visible')
    .should('have.value', searchQuery);
};
