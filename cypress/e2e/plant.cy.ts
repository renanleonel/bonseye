/// <reference types="cypress" />

describe('Plant Details Page', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.visit('/')
    cy.get('[data-cy=plant-card]').should('have.length.greaterThan', 0)
    cy.get('[data-cy=plant-card]').first().click()
    cy.url().should('include', '/plants/')
  })

  it('renders key plant data', () => {
    cy.get('[data-cy=plant-title]').should('be.visible')
    cy.get('[data-cy=plant-scientific-name]').should('be.visible')
    cy.get('[data-cy=plant-description]').should('be.visible')
  })

  it('toggles garden state from details page and reflects in garden', () => {
    cy.get('[data-cy=button-toggle-garden]').click()

    cy.get('[data-cy=link-garden]').click()
    cy.url().should('include', '/garden')
    cy.get('[data-cy=garden-grid] [data-cy=garden-item]').should('have.length', 1)

    cy.go('back')
    cy.url().should('include', '/plants/')

    // Toggle off
    cy.get('[data-cy=button-toggle-garden]').click()

    cy.get('[data-cy=link-garden]').click()
    cy.get('[data-cy=garden-empty]').should('be.visible')
  })
})
