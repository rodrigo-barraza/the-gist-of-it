import React from 'react'
import ButtonComponent from './ButtonComponent'


const ButtonComponentWrapper = ({label}) => {
  function testFunction() {
  }
  return (
    <ButtonComponent label={label} className="" disabled={false} onClick={testFunction} type="button" />
  )
}

describe('<ButtonComponent />', () => {

  beforeEach(() => {
  })

  it('renders the button properly', () => {
    cy.mount(<ButtonComponentWrapper label="Test" />)
    cy.get('button')
    .should('exist')
    .contains('Test')
  })
})