describe('As a user, I should be able to choose a poet to ', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://poetrydb.org/author', {
      statusCode: 200,
      fixture: "authors.json"
    })
    cy.intercept('GET', 'https://poetrydb.org/author/Emily%20Dickinson', {
      statusCode: 200,
      fixture: "emily.json"
    })
    .visit('http://localhost:3000/select-poet')
  })
  it('should be able to select a poet', () => {
    cy.intercept('GET', 'https://poetrydb.org/author/Emily%20Dickinson', {
      statusCode: 200,
      fixture: "emily.json"
    })
    cy.get('#authors')
    .select('Edgar Allan Poe')
  })

  it('should be able to move on to the next page', () => {
    cy.intercept('GET', 'https://poetrydb.org/author/Emily%20Dickinson', {
      statusCode: 200,
      fixture: "poe.json"
    })
    cy.get('#authors')
    .select('Edgar Allan Poe')
    cy.get('#form-link').click()
    cy.url().should('eq', 'http://localhost:3000/poem/1')
  })
})