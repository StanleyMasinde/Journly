import { faker } from '@faker-js/faker';


describe('CRUD Spec', () => {
  it('Creates a new journal', () => {
    cy.visit('/new')
      .get('textarea').should('have.value', '')
      .get('button#save').should('have.attr', 'disabled')
      .get('textarea').type(faker.lorem.sentences())
      .get('button#save').should('not.have.attr', 'disabled')
      .get('button#save')
      .click()
      .get('div#alert').should('be.visible')
      .get('textarea').should('have.value', '')
  })
})