describe('As a user… I should be able to click through a set of styled pages based on the theme of the individual poems and return home to try again', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://poetrydb.org/author', {
      statusCode: 200,
      fixture: "authors.json"
    })
    cy.intercept('GET', 'https://poetrydb.org/author/Emily%20Dickinson', {
      statusCode: 200,
      fixture: "emily.json"
    })
    .visit('http://localhost:3000/poem/1')
  })

  it('should be able to view the first poem and the stylistic elements', () => {
    cy.get('.poem-author').contains('Emily Dickinson')
    cy.get('.poem-title').should('be.visible')
    cy.get('img').should('be.visible')
    cy.get('.lines > :nth-child(1)').should('be.visible')
    cy.get('a > img').should('be.visible')
  })

  it('should be able to click through to the second poem and the stylistic elements', () => {
    cy.get('a > img').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:3000/poem/2')
    cy.get('.poem-author').contains('Emily Dickinson')
    cy.get('.poem-title').should('be.visible')
    cy.get('img').should('be.visible')
    cy.get('.lines > :nth-child(1)').should('be.visible')
  })

  it('should be able to click through to the third poem and the stylistic elements', () => {
    cy.get('a > img').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:3000/poem/2')
    cy.get('a > img').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:3000/poem/3')
    cy.get('.poem-author').contains('Emily Dickinson')
    cy.get('.poem-title').should('be.visible')
    cy.get('img').should('be.visible')
    cy.get('.lines > :nth-child(1)').should('be.visible')
  })

  it('should be able to return to the homepage after visiting the third poem', () => {
    cy.get('a > img').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:3000/poem/2')
    cy.get('a > img').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:3000/poem/3')
    cy.get('a > img').should('be.visible').click()
    cy.get('.title').contains('Secret Passage')
    cy.get('.desc').contains('On the next page there is a list of poets. If you select a poet, up to three of their works will be presented to you. Look for the hidden key to move on to the next poem.')
    cy.url().should('eq', 'http://localhost:3000/')
  })

})