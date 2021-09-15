import { getEventCards } from './EventListActions';

const SIDE_NAV_ORG_SELECTION_MENU = 'aside select#orgSelect'; // TODO: rewrite selector using custom attributes when possible

export const filterByOrganizationFromSideNavigation = (
  organization: string,
): void => {
  cy.get(SIDE_NAV_ORG_SELECTION_MENU).select(organization);
};

export const verifyEventCardsOrganization = (org: string): void => {
  getEventCards().each((eventCard) => {
    cy.wrap(eventCard).get('.mr-2').contains(org); // TODO: rewrite selector using custom attributes when possible
  });
};
