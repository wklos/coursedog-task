export type Event = {
  name: string;
  type: string;
  organization: string;
  contacts: string[];
  description: string;
};

const EVENT_DETAILS_COMPONENT_SELECTOR = '#main-content article'; // TODO: rewrite selector using custom attributes when possible

const verifyEventName = (eventName: string) => {
  cy.get('h1').contains(eventName);
};

const verifyButton = (buttonName: string) => {
  cy.contains('button', buttonName).should('be.enabled'); // TODO: rewrite selector using custom attributes when possible
};

const verifyEventType = (eventType: string) => {
  cy.get('label').contains('Event Type').siblings('a').contains(eventType); // TODO: rewrite selector using custom attributes when possible
};

const verifyContacts = (contacts: string[]) => {
  contacts.forEach((contact) => {
    cy.get('label').contains('Contacts').siblings('span').contains(contact); // TODO: rewrite selector using custom attributes when possible
  });
};

const verifyOrganization = (organization: string) => {
  cy.get('label').contains('Organized by').siblings('a').contains(organization); // TODO: rewrite selector using custom attributes
};

const verifyDescription = (description: string) => {
  cy.get('h3').contains('Description:').siblings('p').contains(description);
};

export const verifyEventDetails = (event: Event): void => {
  cy.get(EVENT_DETAILS_COMPONENT_SELECTOR).within(() => {
    verifyEventName(event.name);
    verifyButton('Add to calendar');
    verifyButton('Add to Google Calendar');
    verifyEventType(event.type);
    verifyContacts(event.contacts);
    verifyOrganization(event.organization);
    verifyDescription(event.description);
  });
};
