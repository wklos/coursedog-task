import {
  filterByOrganizationFromSideNavigation,
  verifyEventCardsOrganization,
} from '../utils/SideNavigationActions';
import { verifyEventCardsQuantity } from '../utils/EventListActions';
import {
  filterByOrganizationFromSearchResults,
  verifyEventCardsContainText,
} from '../utils/SearchPageActions';

describe('Event filtering - side navigation', () => {
  before(() => {
    cy.setDate(2021, 11, 20);
  });

  it('displays 3 events for organization: Model UN', () => {
    cy.visit('/');
    filterByOrganizationFromSideNavigation('Model UN');
    verifyEventCardsQuantity(3);
    verifyEventCardsContainText('Model UN');
    verifyEventCardsOrganization('Model UN');
  });

  it('displays no events for organization: Debate Club', () => {
    cy.visit('/');
    filterByOrganizationFromSideNavigation('Debate Club');
    verifyEventCardsQuantity(0);
    cy.contains('No results found');
  });
});

describe('Event filtering - search page', () => {
  before(() => {
    cy.setDate(2021, 11, 20);
    cy.visit('/search');
  });

  it('displays 3 events for organization: Model UN', () => {
    filterByOrganizationFromSearchResults('Model UN');
    verifyEventCardsQuantity(3);
    verifyEventCardsContainText('Model UN');
    verifyEventCardsOrganization('Model UN');
  });

  it('displays no events for organization: Debate Club', () => {
    filterByOrganizationFromSearchResults('Debate Club');
    verifyEventCardsQuantity(0);
    cy.contains('No results found');
  });
});
