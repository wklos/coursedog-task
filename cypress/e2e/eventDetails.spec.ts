import {
  clickOnLink,
  FEATURED_EVENTS_LINK_SELECTOR,
} from '../utils/MainPageActions';
import { clickOnEventCard } from '../utils/EventListActions';
import { verifyEventDetails } from '../utils/EventDetailsActions';

describe('Event Details', () => {
  before(() => {
    cy.setDate(2021, 9, 2);
    cy.visit('/');
  });

  const events = [
    {
      name: 'QA Task Submission',
      type: 'Alumni Event',
      organization: 'Anderson Collection at Stanford University',
      contacts: ['Cat McGee'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  events.forEach((event) => {
    it(`displays details for event: "${event.name}"`, () => {
      clickOnLink(FEATURED_EVENTS_LINK_SELECTOR);
      clickOnEventCard(event.name);
      verifyEventDetails(event);
    });
  });
});
