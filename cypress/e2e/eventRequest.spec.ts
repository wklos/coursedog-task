describe('Event request', () => {
  before(() => {
    cy.visit('/');
  });

  const eventTypes = [
    'Alumni Event',
    'Speaker',
    'Sports Event',
    'Student Services',
  ];
  eventTypes.forEach((eventType) => {
    it(`adds new event: ${eventType}`, () => {
      cy.get('#requestEventTypeSelect').select(eventType); // BUG: CRD-1
      // TODO: Verify selection
      // TODO: Fill event form
      // TODO: Submit event
      // TODO: Verify new event
    });
  });
});
