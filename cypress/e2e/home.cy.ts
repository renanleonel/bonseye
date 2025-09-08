/// <reference types="cypress" />

describe('Plants Flow', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.visit('/')
  })

  it('navigates to garden page', () => {
    cy.get('[data-cy=button-garden]').click()
    cy.url().should('include', '/garden')
  })
})
