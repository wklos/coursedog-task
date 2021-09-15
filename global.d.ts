declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom command to set specific date.
     * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
     * @param month The month as a number between 1 and 12 (January to December).
     * @param day The date as a number between 1 and 31.
     * cy.setDate(year, month, day)
     * @example cy.setDate(2021,11,20)
     */
    setDate(year: number, month: number, day: number): Chainable<Subject>;

    /**
     * Custom command to restore clock status
     */
    restoreClock(): Chainable<Subject>;
  }
}
