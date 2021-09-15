import {
  selectDateFromCalendar,
  selectDateViaUrl,
} from '../utils/CalendarActions';
import {
  verifyEventListLabel,
  verifyEventsDate,
} from '../utils/EventListActions';

describe('Specific date events', () => {
  const datesWithEvents = [
    {
      year: 2021,
      month: 11,
      day: 20,
    },
  ];

  datesWithEvents.forEach((date) => {
    it(`valid date with events: ${date.day}/${date.month}/${date.year}`, () => {
      cy.visit('/');
      selectDateFromCalendar(date.year, date.month, date.day);
      verifyEventListLabel(date.year, date.month, date.day);
      verifyEventsDate(date.year, date.month, date.day);
    });
  });

  const datesWithoutEvents = [
    {
      year: 2022,
      month: 11,
      day: 20,
    },
  ];

  datesWithoutEvents.forEach((date) => {
    it(`valid date without events: ${date.day}/${date.month}/${date.year}`, () => {
      cy.visit('/');
      selectDateFromCalendar(date.year, date.month, date.day);
      verifyEventListLabel(date.year, date.month, date.day);
      cy.contains('No events found');
    });
  });

  const invalidDays = [-1, 0, 99, 100];
  invalidDays.forEach((day) => {
    it(`invalid day: ${day}`, () => {
      selectDateViaUrl(2022, 11, day);
      cy.contains('Invalid date.');
    });
  });

  const invalidMonths = [-1, 0, 13];
  invalidMonths.forEach((month) => {
    it(`invalid month: ${month}`, () => {
      selectDateViaUrl(2022, month, 20);
      cy.contains('Invalid date.');
    });
  });
});
