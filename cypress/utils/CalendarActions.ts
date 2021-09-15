const CALENDAR_TITLE_SELECTOR = '.vc-pane .vc-title';
const CALENDAR_YEAR_SELECTOR = '.vc-nav-title';
const CALENDAR_DAY_SELECTOR =
  '.vc-grid-container .vc-grid-cell .vc-day-content';
const CALENDAR_MONTH_SELECTOR = '.vc-grid-container .vc-grid-cell span';
const CALENDAR_YEAR_ARROW_SELECTOR = '.vc-nav-arrow';

export const months = [
  {
    fullName: 'January',
    shortName: 'Jan',
  },
  {
    fullName: 'February',
    shortName: 'Feb',
  },
  {
    fullName: 'March',
    shortName: 'Mar',
  },
  {
    fullName: 'April',
    shortName: 'Apr',
  },
  {
    fullName: 'May',
    shortName: 'May',
  },
  {
    fullName: 'June',
    shortName: 'Jun',
  },
  {
    fullName: 'July',
    shortName: 'Jul',
  },
  {
    fullName: 'August',
    shortName: 'Aug',
  },
  {
    fullName: 'September',
    shortName: 'Sept',
  },
  {
    fullName: 'October',
    shortName: 'Oct',
  },
  {
    fullName: 'November',
    shortName: 'Nov',
  },
  {
    fullName: 'December',
    shortName: 'Dec',
  },
];

// TODO: look for more optimal way of selecting year
const selectYearAndMonth = (year: number, month: number) => {
  cy.get(CALENDAR_TITLE_SELECTOR).click();
  cy.get(CALENDAR_YEAR_SELECTOR).then(($el) => {
    const currentYear = +$el.text();
    if (year < currentYear) {
      const numberOfClicks = currentYear - year;
      for (let i = 1; i <= numberOfClicks; i++) {
        cy.get(CALENDAR_YEAR_ARROW_SELECTOR).eq(0).click();
      }
    }
    if (year > currentYear) {
      const numberOfClicks = year - currentYear;
      for (let i = 1; i <= numberOfClicks; i++) {
        cy.get(CALENDAR_YEAR_ARROW_SELECTOR).eq(1).click();
      }
    }
    // Select month
    cy.get(CALENDAR_TITLE_SELECTOR).then(() => {
      cy.get(CALENDAR_MONTH_SELECTOR)
        .contains(months[month - 1].shortName)
        .click({ waitForAnimations: true });
    });

    // Wait for Year/Month selection to disappear
    cy.get(CALENDAR_YEAR_SELECTOR).should('not.exist'); // TODO: replace with waitUntil method - https://www.npmjs.com/package/cypress-wait-until
  });
};

const selectYearAndMonthFromCalendar = (year: number, month: number) => {
  cy.get(CALENDAR_TITLE_SELECTOR).then(($el) => {
    if ($el.text() !== year.toString()) {
      selectYearAndMonth(year, month);
    }
  });
};

const selectDayFromCalendar = (day: number) => {
  cy.get(CALENDAR_DAY_SELECTOR).contains(day).click();
};

export const selectDateFromCalendar = (
  year: number,
  month: number,
  day: number,
): void => {
  selectYearAndMonthFromCalendar(year, month);
  selectDayFromCalendar(day);
};

export const selectDateViaUrl = (
  year: number,
  month: number,
  day: number,
): void => {
  cy.visit(`${Cypress.config().baseUrl}${year}/${month}/${day}`, {
    failOnStatusCode: false,
  });
};
