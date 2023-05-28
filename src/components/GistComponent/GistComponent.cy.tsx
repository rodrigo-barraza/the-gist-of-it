import React from 'react'
import GistComponent from './GistComponent'
import InputComponentStyle from '../InputComponent/InputComponent.module.scss'
import ButtonComponentStyle from '../ButtonComponent/ButtonComponent.module.scss'

describe('<GistComponent />', () => {
  beforeEach(() => {
    cy.mount(<GistComponent />)
  })
  it('renders component property', () => {
    cy.get(`.${InputComponentStyle.InputComponent}`).should('exist')
    cy.get(`.${ButtonComponentStyle.ButtonComponent}`).should('exist')
  })
  it('should click the button to submit', () => {
    cy.get('input').type("asdf1234")
    cy.get('button').click()
  })
  it('should submit the button', () => {
    cy.get('input').type("asdf1234")
    cy.get('form').submit()
  })
  it('should display the not found element when there is no results', () => {
    cy.get('input').type("asdf1234")
    cy.get('form').submit()
    cy.get('.not-found').should('exist')
  })
  it('should display the gists element when there is results', () => {
    cy.get('input').type("armgilles")
    cy.get('form').submit()
    cy.get('.gists').should('exist')
  })
})