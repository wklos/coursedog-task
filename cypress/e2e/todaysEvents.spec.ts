import {
  clickOnLink,
  TODAYS_EVENTS_LINK_SELECTOR,
} from '../utils/MainPageActions';
import { verifyEventCardsQuantity } from '../utils/EventListActions';

describe("Today's Events", () => {
  it('displays 1 event happening if today is November 20th, 2021', () => {
    cy.setDate(2021, 11, 20);
    cy.visit('/');
    clickOnLink(TODAYS_EVENTS_LINK_SELECTOR);
    cy.contains('Today’s events:');
    verifyEventCardsQuantity(1);
  });

  it('displays no events happening if today is September 2nd, 2021', () => {
    cy.setDate(2021, 9, 2);
    cy.visit('/');
    clickOnLink(TODAYS_EVENTS_LINK_SELECTOR);
    cy.contains('Today’s events:');
    cy.contains('No events today');
    verifyEventCardsQuantity(0);
  });
});
