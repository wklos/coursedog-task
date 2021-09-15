import {
  clickOnLink,
  FEATURED_EVENTS_LINK_SELECTOR,
} from '../utils/MainPageActions';
import { verifyEventCardsQuantity } from '../utils/EventListActions';

describe('Featured Events', () => {
  it('displays 3 upcoming featured events if today is September 2nd, 2021', () => {
    cy.setDate(2021, 9, 2);
    cy.visit('/');
    clickOnLink(FEATURED_EVENTS_LINK_SELECTOR);
    cy.contains('Upcoming events:');
    verifyEventCardsQuantity(3);
  });

  it('displays no upcoming featured events if today is November 20th, 2021', () => {
    cy.setDate(2021, 11, 20);
    cy.visit('/');
    clickOnLink(FEATURED_EVENTS_LINK_SELECTOR);
    cy.contains('Upcoming events:');
    cy.contains('There are no upcoming featured events');
    verifyEventCardsQuantity(0);
  });
});
