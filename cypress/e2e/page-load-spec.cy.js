describe('On page load I will be able to see an explanation of the purpose of the application and some directions on what I should expect to see/be able to do with it', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://poetrydb.org/author', {
      statusCode: 200,
      fixture: "authors.json"
    })
    cy.intercept('GET', 'https://poetrydb.org/author/Emily%20Dickinson', {
      statusCode: 200,
      fixture: "authors.json"
    })
    .visit('http://localhost:3000/')
  })
  it('should be able to find the title and the descripton', () => {
    cy.get('.title').contains('Secret Passage')
    cy.get('.desc').contains('On the next page there is a list of poets. If you select a poet, up to three of their works will be presented to you. Look for the hidden key to move on to the next poem.')
  })

  it('should be able to move on to the next page', () => {
    cy.get('.arch-link').click()
    cy.url().should('eq', 'http://localhost:3000/select-poet')
  })
})