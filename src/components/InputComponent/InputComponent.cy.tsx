import React, { useState } from 'react'
import InputComponent from './InputComponent'


const InputComponentWrapper = ({value}) => {
  const [search, setSearch] = useState(value || '')

  return (
    <InputComponent label="Test" onChange={setSearch} value={search} type="input" />
  )
}

describe('<InputComponent />', () => {
  it('renders the input properly', () => {
    cy.mount(<InputComponentWrapper />)
    cy.get('label')
    .should('exist')
    .contains('Test')
    .should('have.text', 'Test')
    cy.get('input')
    .should('exist')
    .should('have.value', '')
    cy.get('input')
    .invoke('attr', 'type')
    .should('eq', 'input')
  })
  it('should take preset values', () => {
    cy.mount(<InputComponentWrapper value="123" />)
    cy.get('input')
    .should('have.value', '123')
  })
  it('should type properly', () => {
    cy.mount(<InputComponentWrapper />)
    cy.get('input')
    .type("hello world")
    .should('have.value', 'hello world')
    .clear()
  })
})