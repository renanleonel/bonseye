/// <reference types="cypress" />

describe('Garden Page', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.visit('/garden')
  })

  it('shows empty state and navigates to browse plants', () => {
    cy.get('[data-cy=garden-title]').should('contain', 'My Garden')
    cy.get('[data-cy=garden-empty]').should('be.visible')

    cy.get('[data-cy=button-browse-plants]').click()
    cy.url().should('include', '/')
  })

  it('adds a plant to garden and shows it with correct count', () => {
    cy.visit('/')
    cy.get('[data-cy=plant-card]').should('have.length.greaterThan', 0)
    cy.get('[data-cy=plant-card]').first().click()

    cy.get('[data-cy=button-toggle-garden]').click()

    cy.get('[data-cy=link-garden]').click()
    cy.get('[data-cy=garden-grid] [data-cy=garden-item]').should('have.length', 1)
    cy.get('[data-cy=garden-count]').should('contain', '1 plant')
  })

  it('removes a plant from garden and shows empty state again', () => {
    cy.visit('/')
    cy.get('[data-cy=plant-card]').first().click()
    cy.get('[data-cy=button-toggle-garden]').click()
    cy.get('[data-cy=link-garden]').click()

    cy.get('[data-cy=garden-grid] [data-cy=garden-item]').should('have.length', 1)
    cy.get('[data-cy=button-remove-from-garden]').click()

    cy.get('[data-cy=garden-empty]').should('be.visible')
  })

  it('persists garden items after reload', () => {
    cy.visit('/')
    cy.get('[data-cy=plant-card]').first().click()
    cy.get('[data-cy=button-toggle-garden]').click()
    cy.get('[data-cy=link-garden]').click()
    cy.get('[data-cy=garden-grid] [data-cy=garden-item]').should('have.length', 1)

    cy.reload()
    cy.get('[data-cy=garden-grid] [data-cy=garden-item]').should('have.length', 1)
  })
})
