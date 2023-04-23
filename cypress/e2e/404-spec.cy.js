describe('as a user, if I navigate to an incorrect url, I see an error', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://poetrydb.org/author', {
      statusCode: 200,
      fixture: "authors.json"
    })
    cy.intercept('GET', 'https://poetrydb.org/author/Emily%20Dickinson', {
      statusCode: 200,
      fixture: "emily.json"
    })
    cy.visit('http://localhost:3000/404')
  })

  it('should be able to see the error', () => {
    cy.visit('http://localhost:3000/404')
    cy.get('.arch-img')
    cy.get('h1').contains('The passage you\'re looking for does not exist.')
  })

  it('should be able to see the error if I navigate to an incorret url', () => {
    cy.visit('http://localhost:3000/banana')
    cy.get('.arch-img')
    cy.get('h1').contains('The passage you\'re looking for does not exist.')
  })
})