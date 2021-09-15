import { searchFromNavigationBar } from '../utils/MainPageActions';
import { verifyEventCardsQuantity } from '../utils/EventListActions';
import {
  verifyEventCardsContainText,
  verifySearchInput,
} from '../utils/SearchPageActions';

describe('Search for events via navigation bar', () => {
  before(() => {
    cy.setDate(2021, 11, 20);
  });

  it('displays one event for search phrase "Tokyo"', () => {
    const searchQuery = 'Tokyo';
    cy.visit('/');
    searchFromNavigationBar(searchQuery);
    cy.get('.spinner').should('not.exist');
    cy.contains('Loading results').should('not.exist');
    cy.contains(`Search results for "${searchQuery}"`);
    verifySearchInput(searchQuery);
    verifyEventCardsQuantity(1);
    verifyEventCardsContainText(searchQuery);
  });

  it('displays no events for search phrase "XYZ"', () => {
    const searchQuery = 'XYZ';
    cy.visit('/');
    searchFromNavigationBar(searchQuery);
    cy.get('.spinner').should('not.exist');
    cy.contains('Loading results').should('not.exist');
    cy.contains(`Search results for "${searchQuery}"`);
    verifySearchInput(searchQuery);
    verifyEventCardsQuantity(0);
    cy.contains('No results found');
  });

  it('updates results if 2 consecutive queries were executed', () => {
    const searchQuery1 = 'XYZ';
    const searchQuery2 = 'Tokyo';
    cy.visit('/');
    searchFromNavigationBar(searchQuery1);
    cy.get('.spinner').should('not.exist');
    cy.contains('Loading results').should('not.exist');
    cy.wait(1000); // TODO: to be removed
    searchFromNavigationBar(searchQuery2);
    cy.get('.spinner').should('not.exist');
    cy.contains('Loading results').should('not.exist');
    cy.contains(`Search results for "${searchQuery2}"`);
    verifySearchInput(searchQuery2);
    verifyEventCardsContainText(searchQuery2);
  });
});
