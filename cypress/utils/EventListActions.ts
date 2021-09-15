import { months } from './CalendarActions';

const EVENT_CARD_SELECTOR = '#main-content .card[role="listitem"]';
const EVENT_LIST_LABEL_SELECTOR = ' #main-content h1 span';

export const getEventCards = (): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.get(EVENT_CARD_SELECTOR);
};

export const verifyEventCardsQuantity = (expectedQuantity: number): void => {
  getEventCards().should('have.length', expectedQuantity);
};

export const verifyEventListLabel = (
  year: number,
  month: number,
  day: number,
): void => {
  cy.contains('Upcoming events:').should('not.exist');
  cy.get(EVENT_LIST_LABEL_SELECTOR).contains(
    `${months[month - 1].fullName} ${day}, ${year}`,
  );
};

export const verifyEventsDate = (
  year: number,
  month: number,
  day: number,
): void => {
  // TODO: it would be good to use here API response that returns events to make sure that all valid events are displayed or not displayed if response is empty
  getEventCards().each((eventCard) => {
    cy.wrap(eventCard).contains(
      `${months[month - 1].shortName} ${day} ${year}`,
    );
  });
};

export const clickOnEventCard = (eventName: string): void => {
  getEventCards().contains(eventName).first().click();
};
