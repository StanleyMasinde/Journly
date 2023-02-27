describe('Navigation spec', () => {
  it('Has a 404 page', () => {
    cy.visit('/unknown')
    .get('h1').should('have.text', 'Sorry, Nothing lives here')
    .get('a').click({timeout: 5000})
  })
})